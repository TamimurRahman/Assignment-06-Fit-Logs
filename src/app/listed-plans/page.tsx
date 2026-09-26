"use client";

import { ExerciseType } from "@/components/types/LibraryTypes";
import Image from "next/image";
import { useContext, useState } from "react";
import { ExerciseContext } from "../context/ExerciseContext";
import { toast } from "react-toastify";
import Link from "next/link";

const Page = () => {
  const { todayPlan, setTodayPlan } = useContext(ExerciseContext);
  const { savePlan, setSavePlan } = useContext(ExerciseContext);
  // Active tab
  const [tab, setTab] = useState<"today" | "saved">("today");

  // Sorting
  const [sortBy, setSortBy] = useState<"rating" | "duration" | "calories">(
    "rating",
  );

  // Sort function
  const sortPlans = (plans: ExerciseType[]) => {
    const sortedPlans = [...plans];

    if (sortBy === "rating") {
      sortedPlans.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === "duration") {
      sortedPlans.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      sortedPlans.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    }

    return sortedPlans;
  };
  const markAsDone = (id: number) => {
    setTodayPlan((prev) =>
      prev.map((exercise) =>
        exercise.id === id ? { ...exercise, completed: true } : exercise,
      ),
    );

    toast.success("Workout marked as done!");
  };

  const removeExercise = (id: number) => {
    if (tab === "today") {
      setTodayPlan((prev) => prev.filter((exercise) => exercise.id !== id));
    } else {
      setSavePlan((prev) => prev.filter((exercise) => exercise.id !== id));
    }

    toast.success("Exercise removed!");
  };
  // Sort both plans
  const sortedTodayPlan = sortPlans(todayPlan ?? []);
  const sortedSavePlan = sortPlans(savePlan ?? []);

  // Select the correct sorted plan depending on active tab
  const sortedExercises = tab === "today" ? sortedTodayPlan : sortedSavePlan;

  // Current exercises
  const exercises: ExerciseType[] =
    tab === "today" ? (todayPlan ?? []) : (savePlan ?? []);

  // Total minutes
  const totalMinutes = exercises.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  // Total calories
  const totalCalories = exercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  return (
    <main className="min-h-screen bg-[#0d0f12] px-5 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        {/* ================= TITLE ================= */}

        <h1 className="text-2xl font-bold">MY PLAN</h1>

        <p className="mt-1 text-xs text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* ================= STATS ================= */}

        <div className="mt-5 grid grid-cols-3 rounded-xl border border-gray-800 bg-[#111419]">
          {/* Exercises */}
          <div className="border-r border-gray-800 p-5">
            <p className="text-[10px] text-gray-500">Exercises</p>

            <p className="mt-1 text-3xl font-bold text-lime-400">
              {exercises.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-r border-gray-800 p-5">
            <p className="text-[10px] text-gray-500">Minutes</p>

            <p className="mt-1 text-3xl font-bold">{totalMinutes}</p>
          </div>

          {/* Calories */}
          <div className="p-5">
            <p className="text-[10px] text-gray-500">Calories</p>

            <p className="mt-1 text-3xl font-bold">{totalCalories}</p>
          </div>
        </div>

        {/* ================= TABS + SORT ================= */}

        <div className="mt-6 flex items-center justify-between">
          {/* Tabs */}
          <div className="flex rounded-lg border border-gray-800 bg-[#15181e] p-1">
            {/* Today's Plan */}
            <button
              onClick={() => setTab("today")}
              className={`rounded px-4 py-2 text-[11px] ${
                tab === "today" ? "bg-[#252a32] text-white" : "text-gray-500"
              }`}
            >
              Today&apos;s Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setTab("saved")}
              className={`rounded px-4 py-2 text-[11px] ${
                tab === "saved" ? "bg-[#252a32] text-white" : "text-gray-500"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "rating" | "duration" | "calories")
              }
              className="rounded-lg border border-gray-700 bg-[#111419] px-3 py-2 text-[10px] text-gray-300 outline-none"
            >
              <option value="duration">Duration</option>

              <option value="calories">Calories</option>

              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* ================= EXERCISE CARDS ================= */}

        <div className="mt-5 space-y-3">
          {sortedExercises.length > 0 ? (
            sortedExercises.map((exercise: ExerciseType) => (
              <div
                key={exercise.id}
                className="flex items-center gap-3 rounded-xl border border-gray-800 bg-[#111419] p-3"
              >
                {/* Image */}
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  width={112}
                  height={64}
                  className="h-16 w-28 rounded-lg object-cover"
                />

                {/* Exercise Information */}
                <div className="flex-1">
                  <h2 className="text-xs font-bold uppercase">
                    {exercise.name}
                  </h2>

                  <p className="text-[10px] text-gray-500">
                    {exercise.equipment}
                  </p>

                  {/* Exercise Stats */}
                  <div className="mt-2 flex gap-3 text-[10px] text-gray-400">
                    {/* Duration */}
                    <span>
                      <span className="text-lime-400">◷</span>{" "}
                      {exercise.duration} min
                    </span>

                    {/* Calories */}
                    <span>
                      <span className="text-lime-400">🔥</span>{" "}
                      {exercise.caloriesBurned} kcal
                    </span>

                    {/* Rating */}
                    <span>
                      <span className="text-lime-400">☆</span> {exercise.rating}
                    </span>
                  </div>
                </div>

                {/* View Details */}

                <Link href={`/card-details/${exercise.id}`}>
                  {" "}
                  <button className="rounded-full border border-gray-700 px-4 py-2 text-[10px] text-gray-300 transition hover:border-gray-500 hover:text-white">
                    {" "}
                    View Details{" "}
                  </button>
                </Link>

                {/* Mark Done */}
                {tab === "today" && (
                  <button
                    onClick={() => markAsDone(exercise.id)}
                    disabled={exercise.completed}
                    className={`rounded-full px-4 py-2 text-[10px] font-semibold ${
                      exercise.completed
                        ? "cursor-default bg-gray-700 text-gray-300"
                        : "bg-lime-400 text-black hover:bg-lime-300"
                    }`}
                  >
                    {exercise.completed ? "✓ Completed" : "✓ Mark as Done"}
                  </button>
                )}

                {/* Remove */}
                <button
                  onClick={() => removeExercise(exercise.id)}
                  className="px-2 text-gray-500 transition hover:text-white"
                >
                  ×
                </button>
              </div>
            ))
          ) : (
            /* Empty State */
            <div className="flex min-h-[285px] items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#0d0f13]">
              <div className="text-center">
                <h2 className="text-xl font-bold text-white">
                  NOTHING HERE YET
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {tab === "today"
                    ? "Browse the library and add a lift to get today moving."
                    : "Save exercises from the library to see them here."}
                </p>

                <Link
                  href="/"
                  className="mt-5 inline-block rounded-full bg-lime-400 px-6 py-2.5 text-xs font-bold text-black transition hover:bg-lime-300"
                >
                  Go to workouts
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
