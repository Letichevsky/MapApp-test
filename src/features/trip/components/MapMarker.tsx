import { motion } from "framer-motion";
import type { IActivity } from "@/features/trip/utils/types";

interface MapMarkerProps {
  activity: IActivity;
  onClick?: (activity: IActivity) => void;
  index?: number;
  isVisible?: boolean;
}

const MapMarker = ({
  activity,
  onClick,
  index = 0,
  isVisible = false,
}: MapMarkerProps) => {
  return (
    <motion.div
      className="relative cursor-pointer group"
      initial={{ scale: 0 }}
      animate={isVisible ? { scale: 1 } : { scale: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.175, 0.885, 0.32, 1.275],
      }}
      whileHover={{ scale: 1.1 }}
      onClick={() => onClick?.(activity)}
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden border-3 border-white shadow-lg transition-transform duration-300 ease-in-out">
        <img
          src={activity.photo_url}
          alt={activity.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm transition-transform duration-300 ease-in-out" />

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg text-xs font-medium text-gray-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {activity.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95" />
      </div>
    </motion.div>
  );
};

export default MapMarker;
