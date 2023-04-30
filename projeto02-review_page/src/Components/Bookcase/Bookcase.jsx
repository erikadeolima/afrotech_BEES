import React from "react";
import readersInfo from '../../untils/readersInfo';
import BookCard from '../BookCard/BookCard';
import './BookCase.css';

function Bookcase(){
  return(
    <div className="bookcase">
    <h1 id="bookcase-title">Minha Estante</h1>
    <div id="bookcase-books">
    {readersInfo[0].bookcase.map((book)=>(
      <BookCard
      key={book.titleBook}
      image={book.src}
      legend={book.titleBook}
      bookcase={true}
      stars={book.stars}
      />
    ))}
    </div>
  </div>
  );
};

export default Bookcase;