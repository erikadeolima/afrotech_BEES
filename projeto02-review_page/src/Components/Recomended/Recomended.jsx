import React, { useContext, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import './Recomended.css';
import storage from "../../Context/Context";
// import { AiOutlineGift, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

function RecomendedReviewBook() {
  const { setBooksInfoInLS,
    getBooksInfoFromLS, booksInfo } = useContext(storage);

  useEffect(() => {
    setBooksInfoInLS()
    getBooksInfoFromLS();
  }, []);

  return (
    <div className="recommendedBook">
      <h1 id="recommendedBook-title">Recomendados</h1>
      <div id="recommendedBook-books">
        {booksInfo.map((book) => (
          <div>
            <BookCard
              key={book.titleBook}
              id={book.id}
              image={book.src}
              legend={book.titleBook}
              titleBook={book.titleBook}
              type={"recommended"}
            />
            {/* <button className='recommendedBookBtn' id="wish">{<AiOutlineGift />}</button>
            <button className='recommendedBookBtn' id="readed">{<AiOutlineCheck />}</button>
            <button className='recommendedBookBtn' id="toRead">{<AiOutlineClose />}</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedReviewBook;