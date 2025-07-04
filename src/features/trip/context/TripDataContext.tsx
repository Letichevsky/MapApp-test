import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { fetchTripData } from "@/features/trip/api/api";
import type { ITripData } from "@/features/trip/utils/types";
import { TripDataContext } from "@/features/trip/context/TripDataContextDef";

interface TripDataProviderProps {
  children: ReactNode;
}

export const TripDataProvider = ({ children }: TripDataProviderProps) => {
  const [tripData, setTripData] = useState<ITripData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTripData = async () => {
    try {
      setLoading(true);
      setError(null);
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

  const refetch = async () => {
    await loadTripData();
  };

  useEffect(() => {
    loadTripData();
  }, []);

  const value = {
    tripData,
    loading,
    error,
    refetch,
  };

  return (
    <TripDataContext.Provider value={value}>
      {children}
    </TripDataContext.Provider>
  );
};
