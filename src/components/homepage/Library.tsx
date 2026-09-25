import React from 'react';
import {  ExerciseType } from '../types/LibraryTypes';
import ExerciseCard from '../shared/ExerciseCard';
const getExercises = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog"); //localhost na dile error dehabe data load korte pare nah in next.js server component e rander hosse
  const data = await response.json();
  return data;
};
const Library = async() => {
    const ExerciseData = await getExercises();
 
  return (
    
      <section className='container mx-auto'>
        <div>
          <h2>THE LIBRARY</h2>
          <p>Twelve lifts covering every major muscle group.</p>
        </div>
                {/* Muscel group cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ExerciseData.map(( exercise:ExerciseType,index:number) => (
           <ExerciseCard key={index}  exercise={ exercise}/> 
          ))}
        </div>
      </section>
   
  );
};

export default Library;