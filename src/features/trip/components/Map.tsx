import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { fetchTripData } from "@/features/trip/api/api";
import { useActiveDay } from "@/features/trip/hooks/useActiveDay";
import type { ITripData, IActivity } from "@/features/trip/utils/types";
import MapMarker from "@/features/trip/components/MapMarker";

const Map = () => {
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const [tripData, setTripData] = useState<ITripData | null>(null);
  const [loading, setLoading] = useState(true);

  const { activeDayId } = useActiveDay();

  useEffect(() => {
    const loadTripData = async () => {
      try {
        setLoading(true);
        const data = await fetchTripData();
        if (data) {
          setTripData(data);
        }
      } catch (err) {
        console.error("Ошибка при загрузке данных поездки:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTripData();
  }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 41.8925,
    lng: 12.4853,
  };

  const handleMarkerClick = (activity: IActivity) => {
    console.log("Клик по маркеру:", activity.name);
  };

  const activeActivities =
    tripData?.days.find((day) => day.id === activeDayId)?.activities || [];

  return (
    <div className="w-[60%] h-full">
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          options={{
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
          }}
        >
          {!loading &&
            activeActivities.map((activity) => (
              <OverlayView
                key={activity.id}
                position={activity.coords}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <MapMarker activity={activity} onClick={handleMarkerClick} />
              </OverlayView>
            ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
