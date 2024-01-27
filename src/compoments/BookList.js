import React, { useEffect, useState } from "react";
import axios from "axios";


const BookList = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchQuery.length !== 0) {
      fetchBooks(searchQuery);
    } else {
      fetchRandomBooks();
    }
  }, [searchQuery]);

  const fetchBooks = async (query) => {
    const apiKey = "AIzaSyDMHpGRNilgq8bM5NMvtpiD5E84jF6NIQo";
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
      );

      const data = await response.json();
      setBooks(data.items || []); // Set books to an empty array if no items are returned
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchRandomBooks = async () => {
    const apiKey = "AIzaSyDMHpGRNilgq8bM5NMvtpiD5E84jF6NIQo";
    try {
      const response1 = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
      );
      const response2 = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
      );

      const data = [...response1.data.items, ...response2.data.items];
      setBooks(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  

  return (
    <div>
      <h1> More Book </h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-card">
            <img
              src={
                book.volumeInfo.imageLinks?.thumbnail ||
                "path/to/placeholder-image.jpg"
              }
              alt={book.volumeInfo.title || "Title not available"}
            />
            {/* <h3>{book.volumeInfo.title || "Title not available"}</h3>
            <p>
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Authors not available"}
            </p> */}
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
