import React, { useState } from 'react';
import readersInfo from '../untils/readersInfo';
import booksList from '../untils/booksInfo';
import storage from './Context';

function Provider({ children }) {

  const [toRead, setToRead] = useState(0);
  const [readed, setReaded] = useState(0);
  const [username, setUsername] = useState("");
  const [booksInfo, setBooksInfo] = useState([]);

  const setUserInfo = () => {
    const userName = readersInfo[0].userName;
    localStorage.setItem('userName', JSON.stringify(userName));
    setUsername(userName);

    const bookCase = readersInfo[0].bookcase;
    localStorage.setItem('bookCase', JSON.stringify(bookCase));
    setReaded(bookCase.length);

    const wishList = readersInfo[0].wishlist;
    localStorage.setItem('wishList', JSON.stringify(wishList));

    const toRead = readersInfo[0].toRead;
    localStorage.setItem('toRead', JSON.stringify(toRead));
    setToRead(toRead.length);
  };

  const setBooksInfoInLS = () => {
    const books = booksList;
    localStorage.setItem('booksInfo', JSON.stringify(books));
  };

  const getBookCaseFromLS = () => {
    const bookCase = JSON.parse(localStorage.getItem('bookCase'));
    return bookCase;
  };

  const setBookCaseFromLS = (book) => {
    const bookCase = JSON.parse(localStorage.getItem('bookCase'));
    if (bookCase.length !== 0) {
      bookCase.push(book);
    }
    localStorage.setItem('bookCase', JSON.stringify(book));
  };

  const getWishListFromLS = () => {
    const wishList = JSON.parse(localStorage.getItem('wishList'));
    return wishList;
  };

  const setWishListFromLS = (book) => {
    const wishList = JSON.parse(localStorage.getItem('wishList'));
    if (wishList.length !== 0) {
      wishList.push(book);
    }
    localStorage.setItem('wishList', JSON.stringify(book));
  };

  const getToReadFromLS = () => {
    const toRead = JSON.parse(localStorage.getItem('toRead'));
    return toRead;
  };

  const setToReadFromLS = (book) => {
    const toRead = JSON.parse(localStorage.getItem('toRead'));
    if (toRead.length !== 0) {
      toRead.push(book);
    }
    localStorage.setItem('toRead', JSON.stringify(book));
  };

  const getBooksInfoFromLS = () => {
    const books = JSON.parse(localStorage.getItem('booksInfo'));
    setBooksInfo(books);
  };

  const context = {
    toRead,
    setToRead,
    readed,
    setReaded,
    username,
    setUserInfo,
    getBookCaseFromLS,
    setBookCaseFromLS,
    getWishListFromLS,
    setWishListFromLS,
    getToReadFromLS,
    setToReadFromLS,
    setBooksInfoInLS,
    getBooksInfoFromLS,
    booksInfo
  };

  return (
    <storage.Provider
      value={context}
    >
      {children}
    </storage.Provider>
  );
};

export default Provider;