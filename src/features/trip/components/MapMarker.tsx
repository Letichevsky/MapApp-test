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
    </motion.div>
  );
};

export default MapMarker;
