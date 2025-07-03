import Sidebar from "@/features/trip/components/Sidebar";
import Map from "@/features/trip/components/Map";
import { ActiveDayProvider } from "@/features/trip/context/ActiveDayContext";
import { HoverProvider } from "@/features/trip/context/HoverContext";
import { TripDataProvider } from "@/features/trip/context/TripDataContext";

// У реальному проекті я б використав Zustand для управління станом.
const Trip = () => {
  return (
    <TripDataProvider>
      <ActiveDayProvider>
        <HoverProvider>
          <div className="flex sm:flex-row flex-col-reverse w-full h-screen">
            <Sidebar />
            <Map />
          </div>
        </HoverProvider>
      </ActiveDayProvider>
    </TripDataProvider>
  );
};

export default Trip;
