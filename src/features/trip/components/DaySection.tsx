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
      className="mb-4 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: dayNumber * 0.1,
        ease: "easeOut",
      }}
    >
      <div
        className="flex items-center justify-between p-5 bg-gradient-to-r from-slate-50 to-blue-50 cursor-pointer transition-all duration-200 border-b border-slate-200/30"
        onClick={handleToggle}
      >
        <div>
          <h3 className="text-lg font-bold text-slate-700">День {dayNumber}</h3>
          <p className="text-slate-600 text-sm font-medium pr-4">{day.title}</p>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 text-slate-600"
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
            <div className="p-5 bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm">
              <div className="space-y-4">
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
