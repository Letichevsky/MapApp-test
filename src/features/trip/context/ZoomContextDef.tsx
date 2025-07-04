import { createContext } from "react";
import type { IActivity } from "@/features/trip/utils/types";

interface ZoomContextType {
  zoomToActivity: (activity: IActivity) => void;
  center: { lat: number; lng: number };
  zoom: number;
  shouldZoom: boolean;
  resetZoom: () => void;
  smoothZoomToActivity: (activity: IActivity) => void;
  setSmoothZoomFunction: (callback: (activity: IActivity) => void) => void;
}

export const ZoomContext = createContext<ZoomContextType | undefined>(
  undefined
);
