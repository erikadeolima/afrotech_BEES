import React from "react";
import './Header.css';
import Button from "../Button/Button"

function Header(){
  return(
    <div className="header">
      <Button nome="home"/>
      <Button nome="menu"/>
    </div>
  );
};

export default Header;