import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { useEffect, useState, useRef } from "react";
import { useActiveDay } from "@/features/trip/hooks/useActiveDay";
import { useTripData } from "@/features/trip/hooks/useTripData";
import { useZoom } from "@/features/trip/hooks/useZoom";
import type { IActivity } from "@/features/trip/utils/types";
import { smoothZoomToActivity } from "@/features/trip/utils/zoomUtils";
import MapMarker from "@/features/trip/components/MapMarker";

const Map = () => {
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const [markersVisible, setMarkersVisible] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);

  const { tripData, loading } = useTripData();
  const { activeDayId } = useActiveDay();
  const { center, zoom, shouldZoom, setSmoothZoomFunction } = useZoom();

  useEffect(() => {
    if (activeDayId) {
      const timer = setTimeout(() => {
        setMarkersVisible(true);
      }, 300);
      return () => {
        clearTimeout(timer);
        setMarkersVisible(false);
      };
    } else {
      setMarkersVisible(false);
    }
  }, [activeDayId]);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const handleMarkerClick = (activity: IActivity) => {
    console.log("Клік по маркеру:", activity.name);
  };

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
    setSmoothZoomFunction(handleSmoothZoomToActivity);
  };

  useEffect(() => {
    if (shouldZoom && mapRef.current) {
      mapRef.current.panTo(center);
      mapRef.current.setZoom(zoom);
    }
  }, [shouldZoom, center, zoom]);

  const handleSmoothZoomToActivity = (activity: IActivity) => {
    if (mapRef.current) {
      smoothZoomToActivity({
        map: mapRef.current,
        activity,
      });
    }
  };

  const activeActivities =
    tripData?.days.find((day) => day.id === activeDayId)?.activities || [];

  return (
    <div className="w-full sm:w-[60%] h-[60svh] sm:h-full">
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          onLoad={onMapLoad}
          options={{
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
          }}
        >
          {!loading &&
            activeActivities.map((activity, index) => (
              <OverlayView
                key={activity.id}
                position={activity.coords}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <MapMarker
                  activity={activity}
                  onClick={handleMarkerClick}
                  index={index}
                  isVisible={markersVisible}
                />
              </OverlayView>
            ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
