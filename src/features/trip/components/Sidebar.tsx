import { useEffect, useState } from "react";
import { fetchTripData } from "@/features/trip/api/api";
import type { ITripData } from "@/features/trip/utils/types";
import DaySection from "@/features/trip/components/DaySection";

const Sidebar = () => {
  const [tripData, setTripData] = useState<ITripData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTripData = async () => {
      try {
        setLoading(true);
        const data = await fetchTripData();
        if (data) {
          setTripData(data);
        } else {
          setError("Не вдалося завантажити дані поїздки");
        }
      } catch (err) {
        setError("Помилка при завантаженні даних");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTripData();
  }, []);

  if (loading) {
    return (
      <div className="w-full sm:w-[40%] h-[40svh] sm:h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-2xl border-r border-slate-200/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-300 rounded-xl mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg"></div>
              <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full sm:w-[40%] h-[40svh] sm:h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-2xl border-r border-slate-200/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="text-red-500 text-center bg-red-50 rounded-xl p-4 border border-red-200">
            <p className="font-medium">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!tripData) {
    return (
      <div className="w-full sm:w-[40%] h-[40svh] sm:h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-2xl border-r border-slate-200/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="text-slate-600 text-center bg-slate-50 rounded-xl p-4 border border-slate-200">
            <p className="font-medium">Немає даних для відображення</p>
          </div>
        </div>
      </div>
    );
  }

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

export default Sidebar;
