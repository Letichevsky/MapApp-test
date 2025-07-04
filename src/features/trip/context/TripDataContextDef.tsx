import { createContext } from "react";
import type { ITripData } from "@/features/trip/utils/types";

interface TripDataContextType {
  tripData: ITripData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const TripDataContext = createContext<TripDataContextType | undefined>(
  undefined
);
