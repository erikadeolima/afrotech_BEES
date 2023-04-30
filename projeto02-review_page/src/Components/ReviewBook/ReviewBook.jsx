import React from "react";
import readersInfo from '../../untils/readersInfo';
import BookCard from '../BookCard/BookCard'
import './ReviewBook.css';

function ReviewBook(props){
  return(
    <div className="reviewBook">
    <h1 id="reviewBook-title">Últimas Avaliações</h1>
    <div id="reviewed-books">
    {readersInfo[0].bookcase.map((book,i)=>(
      <BookCard
      key={book.titleBook}
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

export default ReviewBook;