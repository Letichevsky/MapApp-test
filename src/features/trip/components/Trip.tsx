import Sidebar from "@/features/trip/components/Sidebar";
import Map from "@/features/trip/components/Map";
import { ActiveDayProvider } from "@/features/trip/context/ActiveDayContext";

const Trip = () => {
  return (
    <ActiveDayProvider>
      <div className="flex w-full h-screen">
        <Sidebar />
        <Map />
      </div>
    </ActiveDayProvider>
  );
};

export default Trip;
