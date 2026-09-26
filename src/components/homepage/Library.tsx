import React from 'react';
import {  ExerciseType } from '../types/LibraryTypes';
import ExerciseCard from '../shared/ExerciseCard';
const getExercises = async () => {
  const response = await fetch("https://api.api-store.workers.dev/api/fitlog"); //localhost na dile error dehabe data load korte pare nah in next.js server component e rander hosse
  const data = await response.json();
  return data;
};
const Library = async() => {
    const ExerciseData = await getExercises();
 
  return (
<div className="bg-[#090A0D]">
  <section className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">

    {/* LIBRARY HEADER */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        THE LIBRARY
      </h2>

      <p className="mt-2 text-sm text-gray-500 sm:text-base">
        Twelve lifts covering every major muscle group.
      </p>
    </div>

    {/* MUSCLE GROUP CARDS */}
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {ExerciseData.map((exercise: ExerciseType) => (
    <ExerciseCard
      key={exercise.id}
      exercise={exercise}
    />
  ))}
</div>

  </section>
</div>

   
  );
};

export default Library;