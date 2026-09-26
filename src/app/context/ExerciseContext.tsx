"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
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

  return (
    <ExerciseContext.Provider
      value={{
        todayPlan,
        setTodayPlan,
        savePlan,
        setSavePlan,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;