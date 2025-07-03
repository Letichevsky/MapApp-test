import { useEffect, useState } from "react";
import { fetchTripData } from "@/features/trip/api/api";
import type { ITripData } from "@/features/trip/utils/types";
import SidebarSkeleton from "@/features/trip/components/SidebarSkeleton";
import SidebarState from "@/features/trip/components/SidebarState";
import SidebarContent from "@/features/trip/components/SidebarContent";

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
    return <SidebarSkeleton />;
  }

  if (error) {
    return <SidebarState type="error" message={error} />;
  }

  if (!tripData) {
    return (
      <SidebarState type="no-data" message="Немає даних для відображення" />
    );
  }

  return <SidebarContent tripData={tripData} />;
};

export default Sidebar;
