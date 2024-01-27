
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>
        <img
          src={
            book.volumeInfo.imageLinks?.thumbnail ||
            "path/to/placeholder-image.jpg"
          }
          alt={book.volumeInfo.title || "Title not available"}
        />
      </Link>
      <h3>{book.volumeInfo.title || "Title not available"}</h3>
      <p>
        {book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "Authors not available"}
      </p>
    </div>
  );
};

export default BookCard;
