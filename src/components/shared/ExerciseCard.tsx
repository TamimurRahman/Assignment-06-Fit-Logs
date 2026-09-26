import React from 'react';
import { ExerciseType } from '../types/LibraryTypes';
import Image from 'next/image';
import Link from 'next/link';

interface IExerciseCardProps{
  exercise:ExerciseType;
}

const ExerciseCard = ({exercise}:IExerciseCardProps) => {
  return (
        <Link
      href={`/card-details/${exercise.id}`}
      
    >
<div className="w-full overflow-hidden rounded-xl border border-gray-800 bg-[#15171d] text-white transition-all duration-200 hover:-translate-y-1 hover:border-lime-400">

  {/* Image */}
  <Image
    src={exercise.image}
    alt={exercise.name}
    width={740}
    height={740}
    className="h-48 w-full object-cover"
  />

  {/* Card Content */}
  <div className="p-4">

    {/* Muscle Groups */}
    <div className="mb-3 flex flex-wrap gap-2">
      {exercise.muscleGroups.map((muscle) => (
        <span
          key={muscle}
          className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-bold text-black"
        >
          {muscle.toUpperCase()}
        </span>
      ))}
    </div>

    {/* Exercise Name */}
    <h2 className="text-lg font-bold uppercase">
      {exercise.name}
    </h2>

    {/* Equipment */}
    <p className="mt-1 text-sm text-gray-400">
      {exercise.equipment}
    </p>

    {/* Divider */}
    <div className="my-4 border-t border-gray-800"></div>

    {/* Exercise Information */}
    <div className="flex items-center justify-between text-xs text-gray-400">
      <span>
        ◷ {exercise.duration} min
      </span>

      <span>
        ♥ {exercise.caloriesBurned} kcal
      </span>

      <span>
        ★ {exercise.rating}
      </span>
    </div>

    {/* Details Button */}

      
  

  </div>
</div>
  </Link>
  );
};

export default ExerciseCard;