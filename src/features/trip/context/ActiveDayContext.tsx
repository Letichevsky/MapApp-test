import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface ActiveDayContextType {
  activeDayId: number | null;
  setActiveDayId: (dayId: number | null) => void;
}

const ActiveDayContext = createContext<ActiveDayContextType | undefined>(
  undefined
);

interface ActiveDayProviderProps {
  children: ReactNode;
}

export const ActiveDayProvider: React.FC<ActiveDayProviderProps> = ({
  children,
}) => {
  const [activeDayId, setActiveDayId] = useState<number | null>(1);

  return (
    <ActiveDayContext.Provider value={{ activeDayId, setActiveDayId }}>
      {children}
    </ActiveDayContext.Provider>
  );
};

export { ActiveDayContext };
