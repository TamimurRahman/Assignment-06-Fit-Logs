import React from 'react';
const getBooks = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog"); //localhost na dile error dehabe data load korte pare nah in next.js server component e rander hosse
  const data = await response.json();
  return data;
};
const Library = async() => {
    const booksData = await getBooks();
  console.log(booksData, "books data");
  return (
    <div>
      
    </div>
  );
};

export default Library;