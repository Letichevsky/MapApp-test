import ActivityCard from "@/features/trip/components/ActivityCard";
import type { IDay } from "@/features/trip/utils/types";

interface DaySectionProps {
  day: IDay;
  dayNumber: number;
}

const DaySection = ({ day, dayNumber }: DaySectionProps) => {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          День {dayNumber}
        </h3>
        <p className="text-gray-600 text-sm">{day.title}</p>
      </div>

      <div className="space-y-3">
        {day.activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default DaySection;
