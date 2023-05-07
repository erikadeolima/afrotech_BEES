import React, { useState } from 'react';
import readersInfo from '../untils/readersInfo';
import storage from './Context';

function Provider({ children }) {

  const [toRead, setToRead] = useState(0);
  const [readed, setReaded] = useState(0);

  const [username, setUsername] = useState("");

  const getUser = () => {
    const userName = readersInfo[0].userName;
    setUsername(userName);
  };

  const getReaded = () => {
    const books = JSON.parse(localStorage.getItem('readed'));
    setReaded(books);
  };

  const getToReaded = () => {
    const books = JSON.parse(localStorage.getItem('toRead'));
    return books;
  };

  const saveReaded = () => {
    const readedBooks = readersInfo[0].bookcase;
    localStorage.setItem('readed', JSON.stringify(readedBooks.length));
  };

  const saveToReaded = (book) => {
    localStorage.setItem('toRead', JSON.stringify(book));
  };

  const context = {
    toRead,
    setToRead,
    readed,
    setReaded,
    getReaded,
    getToReaded,
    saveReaded,
    saveToReaded,
    username,
    getUser
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