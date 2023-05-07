import React, { useContext, useEffect, useState } from "react";
import BookCard from '../BookCard/BookCard';
import storage from "../../Context/Context";
import './BookCase.css';

function Bookcase() {
  const { getBookCaseFromLS } = useContext(storage);
  const [bookCase, setBookCase] = useState([]);

  useEffect(() => {
    const bookCase = getBookCaseFromLS();
    setBookCase(bookCase);
  }, []);

  return (
    <div className="bookcase">
      <h1 id="bookcase-title">Minha Estante</h1>
      <div id="bookcase-books">
        {bookCase.map((book) => (
          <BookCard
            key={book.titleBook}
            id={book.id}
            image={book.src}
            legend={book.titleBook}
            type={"bookcase"}
            stars={book.stars}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookcase;