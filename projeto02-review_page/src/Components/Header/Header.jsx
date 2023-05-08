import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import storage from "../../Context/Context";
import './Header.css';

function Header(props) {
  const { toRead, readed, username, setUserInfo } = useContext(storage);


  useEffect(() => {
    setUserInfo();
  }, []);
  return (
    <div className="header">
      <Link to="/">
        <span id="header-profile-img">{props.imageProfile}</span>
      </Link>
      <h1 id="header-title">{username} </h1>
      <p id="read-books">{readed}<span> lidos</span></p>
      <p id="to-read-books">{toRead}<span>vou ler</span></p>
    </div>
  );
};

export default Header;
