"use client";

import { ExerciseType } from "@/components/types/LibraryTypes";
import { useContext } from "react";
import { ExerciseContext } from "@/app/context/ExerciseContext";
import { toast } from "react-toastify";

interface SavePlanButtonProps {
  exercise: ExerciseType;
}

const SavePlanButton = ({ exercise }: SavePlanButtonProps) => {
  const { savePlan, setSavePlan } = useContext(ExerciseContext);

  const handleSavePlan = () => {
    // Check duplicate
    const alreadyExists = savePlan.some(
      (item:ExerciseType) => item.id === exercise.id
    );

    if (alreadyExists) {
       toast.warning(`Already saved plan`)
      return;
    }

    // Add exercise
    setSavePlan([...savePlan, exercise]);
     toast.success(`Save for later`)
  };

  return (
    <button
      onClick={handleSavePlan}
      className="rounded-full border border-gray-700 px-5 py-2 text-sm text-white hover:border-lime-400 hover:text-lime-400"
    >
      Save Exercise
    </button>
  );
};

export default SavePlanButton;