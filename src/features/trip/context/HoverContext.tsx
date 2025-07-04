import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface HoverContextType {
  hoveredActivityId: number | null;
  setHoveredActivityId: (activityId: number | null) => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

interface HoverProviderProps {
  children: ReactNode;
}

export const HoverProvider: React.FC<HoverProviderProps> = ({ children }) => {
  const [hoveredActivityId, setHoveredActivityId] = useState<number | null>(
    null
  );

  return (
    <HoverContext.Provider value={{ hoveredActivityId, setHoveredActivityId }}>
      {children}
    </HoverContext.Provider>
  );
};

export { HoverContext };
