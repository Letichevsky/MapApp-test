import type { IActivity } from "@/features/trip/utils/types";

interface MapMarkerProps {
  activity: IActivity;
  onClick?: (activity: IActivity) => void;
}

const MapMarker = ({ activity, onClick }: MapMarkerProps) => {
  return (
    <div
      className="relative cursor-pointer group"
      onClick={() => onClick?.(activity)}
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300 ease-in-out">
        <img
          src={activity.photo_url}
          alt={activity.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm group-hover:scale-110 transition-transform duration-300 ease-in-out"></div>

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg text-xs font-medium text-gray-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {activity.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
      </div>
    </div>
  );
};

export default MapMarker;
