import React, { createContext, useContext, useState } from "react";
import checklistData from "../data/checklistData";

const ChecklistContext = createContext();

export function ChecklistProvider({ children }) {
  const [segments, setSegments] = useState(checklistData);

  const handleToggleItem = (itemId) => {
    setSegments((prev) =>
      prev.map((segment) => ({
        ...segment,
        items: segment.items.map((item) => {
          if (item.id === itemId) {
            const isNowCompleted = !item.completed;
            return {
              ...item,
              completed: isNowCompleted,
              completedAt: isNowCompleted ? Date.now() : undefined,
            };
          }
          return item;
        }),
      }))
    );
  };

  return (
    <ChecklistContext.Provider value={{ segments, handleToggleItem }}>
      {children}
    </ChecklistContext.Provider>
  );
}

export function useChecklist() {
  return useContext(ChecklistContext);
}
