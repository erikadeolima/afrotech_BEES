import React from "react";
import './Header.css';
import Picture from "../Picture/Picture";

function Header(props){
  return(
    <div className="header">
      <header>
        <Picture
        component="header"
        name={props.name}
        src={props.src}
        />
        <h1>My Feed</h1>
      </header>
    </div>
  );
}

export default Header;