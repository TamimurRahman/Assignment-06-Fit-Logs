"use client";
import { ExerciseContext } from "@/app/context/ExerciseContext";
import React, { useContext } from "react";
import { ExerciseType } from "../types/LibraryTypes";
import { toast } from "react-toastify";

const SavePlanButton = ({ exercise }: { exercise: ExerciseType }) => {
  const { savePlan, setSavePlan } = useContext(ExerciseContext);
  //  console.log(booksProvider,"  booksProvider");
  const handleSavePlan = () => {
    console.log("read book button trigger", exercise);
    setSavePlan([...savePlan, exercise]);
      toast.success(`Save for later `)
  };
  return (
    <button
      className="rounded-lg border border-gray-700 px-5 py-3 text-sm text-white hover:bg-gray-800"
      onClick={() => handleSavePlan()}
    >
      Save for later
    </button>
  );
};

export default SavePlanButton;
