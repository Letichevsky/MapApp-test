import { useContext } from "react";
import { ZoomContext } from "@/features/trip/context/ZoomContextDef";

export const useZoom = () => {
  const context = useContext(ZoomContext);
  if (context === undefined) {
    throw new Error("useZoom must be used within a ZoomProvider");
  }
  return context;
};
