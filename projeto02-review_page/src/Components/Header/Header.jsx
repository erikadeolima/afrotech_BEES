import React from "react";
import './Header.css';

function Header(props){
  return(
    <div className="header">
    <span id="header-profile-img">{props.imageProfile}</span>
    <h1 id="header-title">{props.userName}</h1>
    <p id="read-books">{props.readBooks}<span> lidos</span></p>
    <p id="to-read-books">{props.toReadBooks}<span>vou ler</span></p>
  </div>
  );
};

export default Header;
