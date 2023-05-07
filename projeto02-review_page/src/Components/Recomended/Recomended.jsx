import React from 'react';
import BooksInfo from '../../untils/booksInfo';
import BookCard from '../BookCard/BookCard'
import './Recomended.css';

function RecomendedReviewBook(props) {
  return (
    <div className="recomendedBook">
      <h1 id="recomendedBook-title">Recomendados</h1>
      <div id="recomendedBook-books">
        {BooksInfo.map((book) => (
          <BookCard
            key={book.titleBook}
            id={book.id}
            image={book.src}
            legend={book.titleBook}
            titleBook={book.titleBook}
            reviewBook={book.reviewBook}
          />
        ))}
      </div>
    </div>
  );
};

export default RecomendedReviewBook;