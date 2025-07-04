import { useContext } from "react";
import { TripDataContext } from "@/features/trip/context/TripDataContextDef";

export const useTripData = () => {
  const context = useContext(TripDataContext);
  if (context === undefined) {
    throw new Error("useTripData must be used within a TripDataProvider");
  }
  return context;
};
