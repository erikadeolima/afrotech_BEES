import React from "react";
import readersInfo from '../../untils/readersInfo';
import BookCard from '../BookCard/BookCard';
import './FavoritesBooks.css';

function FavoritesBook() {
  return (
    <div className="favorites">
      <h1 id="favorites-title">Meus Favoritos</h1>
      <div id="favorites-books">
        {
          readersInfo[0].bookcase
            .filter(isFavorited => isFavorited.favorited === true)
            .map((book) => (
              <BookCard
                key={book.titleBook}
                id={book.id}
                image={book.src}
                legend={book.titleBook}
                favorites={true}
                stars={book.stars}
              />
            ))
        }
      </div>
    </div>
  );
};

export default FavoritesBook;