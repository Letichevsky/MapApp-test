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
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <div
        className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={handleToggle}
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            День {dayNumber}
          </h3>
          <p className="text-gray-600 text-sm">{day.title}</p>
        </div>
        <div
          className={`transform transition-transform duration-200 ${
            isActive ? "rotate-180" : ""
          }`}
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
        </div>
      </div>

      {isActive && (
        <div className="p-4 bg-white">
          <div className="space-y-3">
            {day.activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DaySection;
