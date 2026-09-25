"use client";
import React, { createContext, ReactNode, useState } from 'react';
export const ExerciseContext = createContext({});
const ExerciseProvider = ({children}:{children:ReactNode}) => {
  const [todayPlan,setTodayPlan] = useState([]);
  const [savePlan,setSavePlan] = useState([]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan
  };
   return (
    <ExerciseContext.Provider value={sharedData}>{children}</ExerciseContext.Provider>
  );
};

export default ExerciseProvider;