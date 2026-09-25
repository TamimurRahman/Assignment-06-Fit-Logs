"use client"

import { useContext } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';

const ListedPlans = () => {
  const {todayPlan,savePlan}= useContext(ExerciseContext);
  console.log(todayPlan);
  return (
    <div>
      Listed Plans | Today plan:{todayPlan.length}  | Save Plan:{savePlan.length}
    </div>
  );
};

export default ListedPlans;