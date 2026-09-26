"use client";
import { ExerciseContext } from "@/app/context/ExerciseContext";
import React, { useContext } from "react";
import { ExerciseType } from "../types/LibraryTypes";
import { toast } from "react-toastify";

const TodaysPlanButton = ({ exercise }: { exercise: ExerciseType }) => {
  const { todayPlan, setTodayPlan } = useContext(ExerciseContext);
  //  console.log(booksProvider,"  booksProvider");
  const handleTodayPlan = () => {
    console.log("read book button trigger", exercise);
    setTodayPlan([...todayPlan, exercise]);
      toast.success(`Add to today's plan`)
  };
  return (
    <button
      className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black hover:bg-lime-300"
      onClick={() => handleTodayPlan()}
    >
      Add to today&apos;s plan
    </button>
  );
};

export default TodaysPlanButton;
