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
          setError("Не удалось загрузить данные поездки");
        }
      } catch (err) {
        setError("Ошибка при загрузке данных");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTripData();
  }, []);

  if (loading) {
    return (
      <div className="w-[40%] h-full bg-[linear-gradient(to_top,_#dfe9f3_0%,_#ffffff_100%)] border-r border-gray-300">
        <div className="p-4">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[40%] h-full bg-[linear-gradient(to_top,_#dfe9f3_0%,_#ffffff_100%)] border-r border-gray-300">
        <div className="p-4">
          <div className="text-red-600 text-center">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!tripData) {
    return (
      <div className="w-[40%] h-full bg-[linear-gradient(to_top,_#dfe9f3_0%,_#ffffff_100%)] border-r border-gray-300">
        <div className="p-4">
          <div className="text-gray-600 text-center">
            <p>Немає даних для відображення</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[40%] h-full bg-[linear-gradient(to_top,_#dfe9f3_0%,_#ffffff_100%)] bg-blend-multiply border-r border-gray-300 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {tripData.trip_title}
        </h2>

        <div className="space-y-6">
          {tripData.days.map((day, index) => (
            <DaySection key={day.id} day={day} dayNumber={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
