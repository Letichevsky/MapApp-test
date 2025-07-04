import { useTripData } from "@/features/trip/hooks/useTripData";
import SidebarSkeleton from "@/features/trip/components/SidebarSkeleton";
import SidebarState from "@/features/trip/components/SidebarState";
import SidebarContent from "@/features/trip/components/SidebarContent";

const Sidebar = () => {
  const { tripData, loading, error } = useTripData();

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
