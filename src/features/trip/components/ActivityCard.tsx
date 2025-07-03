import { motion } from "framer-motion";
import { useHover } from "@/features/trip/hooks/useHover";
import type { IActivity } from "@/features/trip/utils/types";
import { cn } from "@/utils/utils";

interface ActivityCardProps {
  activity: IActivity;
  index?: number;
  isVisible?: boolean;
}

const ActivityCard = ({
  activity,
  index = 0,
  isVisible = false,
}: ActivityCardProps) => {
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
      className={`bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 transition-all duration-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg ${
        isHovered
          ? "bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-blue-300/50 shadow-xl scale-[1.02]"
          : "hover:bg-white/80 hover:border-slate-300/50"
      }`}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-start flex-col xl:flex-row space-x-4 transition-all duration-300 ease-in-out">
        <div className="w-full xl:w-64 flex-shrink-0">
          <img
            src={activity.photo_url}
            alt={activity.name}
            className={cn(
              "min-w-full xl:w-64 h-40 object-cover rounded-l-xl transition-all duration-300 shadow-md",
              isHovered ? "scale-105" : ""
            )}
            loading="lazy"
          />
        </div>

        <div className="flex-1 py-4 px-3">
          <h4 className="text-sm font-bold text-slate-800 mb-2 leading-tight">
            {activity.name}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            {activity.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
