"use client";

import { ExerciseType } from "@/components/types/LibraryTypes";
import { useContext } from "react";
import { ExerciseContext } from "@/app/context/ExerciseContext";
import { toast } from "react-toastify";

interface TodaysPlanButtonProps {
  exercise: ExerciseType;
}

const TodaysPlanButton = ({ exercise }: TodaysPlanButtonProps) => {
  const { todayPlan, setTodayPlan } = useContext(ExerciseContext);

  const handleAddToTodayPlan = () => {
    // Check duplicate
    const alreadyExists = todayPlan.some(
      (item:ExerciseType) => item.id === exercise.id
    );

    if (alreadyExists) {
       toast.warning(`Already add to today's plan `);
      return;
    }

    // Add exercise
    setTodayPlan([...todayPlan, exercise]);
     toast.success(`Add to today's plan `);
  };

  return (
    <button
      onClick={handleAddToTodayPlan}
      className="rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black hover:bg-lime-300"
    >
      Add to Today&apos;s Plan
    </button>
  );
};

export default TodaysPlanButton;