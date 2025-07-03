import { motion, AnimatePresence } from "framer-motion";
import ActivityCard from "@/features/trip/components/ActivityCard";
import { useActiveDay } from "@/features/trip/hooks/useActiveDay";
import type { IDay } from "@/features/trip/utils/types";

interface DaySectionProps {
  day: IDay;
  dayNumber: number;
}

const DaySection = ({ day, dayNumber }: DaySectionProps) => {
  const { activeDayId, setActiveDayId } = useActiveDay();
  const isActive = activeDayId === day.id;

  const handleToggle = () => {
    if (isActive) {
      setActiveDayId(null);
    } else {
      setActiveDayId(day.id);
    }
  };

  return (
    <motion.div
      className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: dayNumber * 0.1,
        ease: "easeOut",
      }}
    >
      <div
        className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
        onClick={handleToggle}
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            День {dayNumber}
          </h3>
          <p className="text-gray-600 text-sm">{day.title}</p>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              opacity: { duration: 0.3 },
            }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white">
              <div className="space-y-3">
                {day.activities.map((activity, index) => (
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                    index={index}
                    isVisible={isActive}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DaySection;
