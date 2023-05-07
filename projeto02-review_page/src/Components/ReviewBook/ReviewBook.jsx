import React, { useState } from "react";
import readersInfo from '../../untils/readersInfo';
import BookCard from '../BookCard/BookCard'
import './ReviewBook.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ReviewBook(props) {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  };
  return (
    <div className="reviewBook">
      <h1 id="reviewBook-title">Últimas Avaliações</h1>
      <Carousel
        selectedItem={readersInfo[0].bookcase[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
        id="reviewed-books"
      >
        {readersInfo[0].bookcase.map((book, i) => (
          <BookCard
            key={book.titleBook}
            id={book.id}
            image={book.src}
            legend={book.titleBook}
            titleBook={book.titleBook}
            review={true}
            reviewBook={book.reviewBook}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewBook;