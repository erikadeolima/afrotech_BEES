import React from "react";
import './Button.css';

function Button(props){
  return(
    <button id={`${props.name}-button`}>{props.name}</button>
  );
}

export default Button;
