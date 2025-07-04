import { useContext } from "react";
import { ActiveDayContext } from "@/features/trip/context/ActiveDayContext";

export const useActiveDay = () => {
  const context = useContext(ActiveDayContext);
  if (context === undefined) {
    throw new Error("useActiveDay must be used within an ActiveDayProvider");
  }
  return context;
};
