"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { ExerciseType } from "@/components/types/LibraryTypes";

interface ExerciseContextType {
  todayPlan: ExerciseType[];
  setTodayPlan: Dispatch<SetStateAction<ExerciseType[]>>;
  savePlan: ExerciseType[];
  setSavePlan: Dispatch<SetStateAction<ExerciseType[]>>;
}

export const ExerciseContext = createContext<ExerciseContextType>({
  todayPlan: [],
  setTodayPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
});

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<ExerciseType[]>([]);
  const [savePlan, setSavePlan] = useState<ExerciseType[]>([]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan,
  };

  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;