import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import BookCard from "../../Components/BookCard/BookCard";
import { CgBee } from "react-icons/cg";
import './Review.css';
import storage from "../../Context/Context";

function Review() {
  const { getBookCaseFromLS } = useContext(storage);
  const [bookCase, setBookCase] = useState([]);

  useEffect(() => {
    const bookCase = getBookCaseFromLS();
    setBookCase(bookCase);
  }, []);
  return (
    <div className="Review">
      <Header
        imageProfile={<CgBee />}
      />
      <div className="bloco-1">
        <Menu />
        <div className="review">
          <h1 id="review-title">Minhas Resenhas</h1>
          {<div id="review-books">
            {
              bookCase.map((book) => (
                <BookCard
                  key={book.titleBook}
                  id={book.id}
                  image={book.src}
                  legend={book.titleBook}
                  titleBook={book.titleBook}
                  type={"review-detail"}
                  reviewBook={book.reviewBook}
                />
              ))
            }
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Review;