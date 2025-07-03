import Sidebar from "@/features/trip/components/Sidebar";
import Map from "@/features/trip/components/Map";

const Trip = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <Map />
    </div>
  );
};

export default Trip;
