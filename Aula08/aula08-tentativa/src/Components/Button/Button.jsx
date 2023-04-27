import React from "react";
import './Button.css';

function Button(props){
  return (
    <div class="button">
      <button id={`${props.nome}-button`}>{props.nome}</button>
    </div>
  );
};

export default Button;