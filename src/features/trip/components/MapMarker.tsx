import { motion } from "framer-motion";
import { useHover } from "@/features/trip/hooks/useHover";
import type { IActivity } from "@/features/trip/utils/types";
import { cn } from "@/utils/utils";

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
  const { hoveredActivityId, setHoveredActivityId } = useHover();
  const isHovered = hoveredActivityId === activity.id;

  const handleMouseEnter = () => {
    setHoveredActivityId(activity.id);
  };

  const handleMouseLeave = () => {
    setHoveredActivityId(null);
  };

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
      onClick={() => onClick?.(activity)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "relative w-12 h-12 rounded-full overflow-hidden border-3 border-white shadow-lg transition-all duration-300 ease-in-out",
          isHovered ? "scale-110 border-blue-400 shadow-xl z-50" : ""
        )}
      >
        <img
          src={activity.photo_url}
          alt={activity.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        className={cn(
          "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 rounded-full blur-sm transition-all duration-300 ease-in-out",
          isHovered ? "bg-blue-400/30 w-10" : "bg-black/20"
        )}
      />

      <div
        className={cn(
          "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 backdrop-blur-sm rounded-lg shadow-lg text-xs font-medium whitespace-nowrap transition-all duration-300 pointer-events-none",
          isHovered
            ? "bg-blue-500/95 text-white opacity-100"
            : "bg-white/95 text-gray-800 opacity-0 group-hover:opacity-100"
        )}
      >
        {activity.name}
        <div
          className={cn(
            "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent",
            isHovered ? "border-t-blue-500/95" : "border-t-white/95"
          )}
        />
      </div>
    </motion.div>
  );
};

export default MapMarker;
