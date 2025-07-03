import { motion } from "framer-motion";
import type { IActivity } from "@/features/trip/utils/types";

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
  return (
    <motion.div
      className="bg-gray-50 rounded-lg border-gray-200 hover:bg-gray-100 transition-all duration-300 overflow-hidden cursor-pointer"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <img
            src={activity.photo_url}
            alt={activity.name}
            className="w-64 h-40 object-cover hover:scale-105 hover:ml-[-2.5%] transition-all duration-300"
            loading="lazy"
          />
        </div>

        <div className="flex-1 min-w-0 py-4 px-2">
          <h4 className="text-sm font-medium text-gray-900 mb-1">
            {activity.name}
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            {activity.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
