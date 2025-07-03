import Sidebar from "@/features/trip/components/Sidebar";
import Map from "@/features/trip/components/Map";
import { ActiveDayProvider } from "@/features/trip/context/ActiveDayContext";
import { HoverProvider } from "@/features/trip/context/HoverContext";

const Trip = () => {
  return (
    <ActiveDayProvider>
      <HoverProvider>
        <div className="flex w-full h-screen">
          <Sidebar />
          <Map />
        </div>
      </HoverProvider>
    </ActiveDayProvider>
  );
};

export default Trip;
