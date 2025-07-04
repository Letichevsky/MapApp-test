import type { ITripData } from "@/features/trip/utils/types";
import DaySection from "@/features/trip/components/DaySection";

interface SidebarContentProps {
  tripData: ITripData;
}

const SidebarContent = ({ tripData }: SidebarContentProps) => {
  return (
    <div className="w-full sm:w-[40%] h-[40svh] sm:h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-2xl border-r border-slate-200/50 backdrop-blur-sm overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            {tripData.trip_title}
          </h2>
        </div>

        <div className="space-y-4">
          {tripData.days.map((day, index) => (
            <DaySection key={day.id} day={day} dayNumber={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
