import React, { useContext, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import './Recomended.css';
import storage from "../../Context/Context";

function RecomendedReviewBook() {
  const { setBooksInfoInLS,
    getBooksInfoFromLS, booksInfo } = useContext(storage);

  useEffect(() => {
    setBooksInfoInLS()
    getBooksInfoFromLS();
  }, []);

  return (
    <div className="recomendedBook">
      <h1 id="recomendedBook-title">Recomendados</h1>
      <div id="recomendedBook-books">
        {booksInfo.map((book) => (
          <BookCard
            key={book.titleBook}
            id={book.id}
            image={book.src}
            legend={book.titleBook}
            titleBook={book.titleBook}
            type={"recommended"}
          />
        ))}
      </div>
    </div>
  );
};

export default RecomendedReviewBook;