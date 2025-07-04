import { useState } from "react";
import type { ReactNode } from "react";
import type { IActivity } from "@/features/trip/utils/types";

import { ZoomContext } from "@/features/trip/context/ZoomContextDef";

interface ZoomProviderProps {
  children: ReactNode;
}

export const ZoomProvider = ({ children }: ZoomProviderProps) => {
  const [center, setCenter] = useState({ lat: 41.8925, lng: 12.4853 });
  const [zoom, setZoom] = useState(13);
  const [shouldZoom, setShouldZoom] = useState(false);
  const [smoothZoomCallback, setSmoothZoomCallback] = useState<
    ((activity: IActivity) => void) | null
  >(null);

  const zoomToActivity = (activity: IActivity) => {
    setCenter(activity.coords);
    setZoom(16);
    setShouldZoom(true);

    setTimeout(() => {
      setShouldZoom(false);
    }, 100);
  };

  const handleResetZoom = () => {
    setCenter({ lat: 41.8925, lng: 12.4853 });
    setZoom(13);
    setShouldZoom(false);
  };

  const smoothZoomToActivity = (activity: IActivity) => {
    console.log("Context smoothZoomToActivity called:", activity.name);
    if (smoothZoomCallback) {
      smoothZoomCallback(activity);
    } else {
      console.log("smoothZoomCallback is null!");
    }
  };

  const setSmoothZoomFunction = (callback: (activity: IActivity) => void) => {
    setSmoothZoomCallback(() => callback);
  };

  return (
    <ZoomContext.Provider
      value={{
        zoomToActivity,
        center,
        zoom,
        shouldZoom,
        resetZoom: handleResetZoom,
        smoothZoomToActivity,
        setSmoothZoomFunction,
      }}
    >
      {children}
    </ZoomContext.Provider>
  );
};
