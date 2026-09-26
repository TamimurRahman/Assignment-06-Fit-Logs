import SavePlanButton from "@/components/exerciseDetails/SavePlanButton";
import TodaysPlanButton from "@/components/exerciseDetails/TodaysPlanButton";
import { ExerciseType } from "@/components/types/LibraryTypes";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
interface ExerciseDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getExercise = async () => {
  const response = await fetch("https://api.api-store.workers.dev/api/fitlog"); //localhost na dile error dehabe data load korte pare nah in next.js server component e rander hosse
  const data = await response.json();
  return data;
};

const page = async ({ params }: ExerciseDetailsPageProps) => {
  const { id } = await params;
  console.log("id ", id);
  const ExerciseData = await getExercise();
  const exercise = ExerciseData.find(
    (exercise: ExerciseType) => exercise.id === Number(id),
  );

  if (!exercise) {
    notFound(); //when user find differen id number this is an error handeling when book is not exists
  }
  return (
    <div className="container mx-auto px-4 py-5">
      {/* Main Card */}
      <div className="grid gap-8    shadow-lg md:grid-cols-2 ">
        {/* ================= IMAGE ================= */}
        <div>
          <Image
            src={exercise.image}
            alt={exercise.name}
            width={740}
            height={740}
            className="h-full max-h-[600px] w-full rounded-lg object-cover"
          />
        </div>

        {/* ================= DETAILS ================= */}
        <div className="flex flex-col">
          {/* Name */}
          <h1 className="text-3xl font-bold uppercase text-white">
            {exercise.name}
          </h1>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-gray-400">
            {exercise.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex gap-2">
            {exercise.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Information */}
          <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
            {/* Equipment */}
            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs uppercase text-gray-400">Equipment</span>

              <span className="text-sm text-white">{exercise.equipment}</span>
            </div>

            {/* Difficulty */}
            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs uppercase text-gray-400">
                Difficulty
              </span>

              <span className="text-sm text-white">{exercise.difficulty}</span>
            </div>

            {/* Sets */}
            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs uppercase text-gray-400">Sets</span>

              <span className="text-sm text-white">{exercise.sets}</span>
            </div>

            {/* Reps */}
            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs uppercase text-gray-400">Reps</span>

              <span className="text-sm text-white">{exercise.reps}</span>
            </div>

            {/* Duration */}
            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs uppercase text-gray-400">Duration</span>

              <span className="text-sm text-white">
                {exercise.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs uppercase text-gray-400">Calories</span>

              <span className="text-sm text-white">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex justify-between px-4 py-3">
              <span className="text-xs uppercase text-gray-400">Rating</span>

              <span className="text-sm text-white">{exercise.rating}</span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-5">
            <h2 className="text-sm font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {exercise.instructions.map(
                (instruction: string, index: number) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-400">
                    <span>{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ),
              )}
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-6 flex flex-wrap gap-3">
            <TodaysPlanButton exercise={exercise}></TodaysPlanButton>
            <SavePlanButton exercise={exercise}></SavePlanButton>

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
