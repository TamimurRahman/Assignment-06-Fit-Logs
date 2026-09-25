"use client"

import { useContext } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';

const ListedPlans = () => {
  const {todayPlan}= useContext(ExerciseContext);
  console.log(todayPlan);
  return (
    <div>
      <h1>Lisetd books</h1>
    </div>
  );
};

export default ListedPlans;