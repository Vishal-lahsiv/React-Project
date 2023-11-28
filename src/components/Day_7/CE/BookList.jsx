// src/components/BookList.js

import React, { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((data) => {
        // Transform the data into the desired format
        const transformedData = data.data.map((book) => ({
          id: book.id,
          title: book.title,
          author: book.author,
        }));

        // Set the transformed data in the state
        setBooks(transformedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Book List</h1>
      <ul style={{color:'black'}}>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong>{book.title}, <strong>Author:</strong> {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;