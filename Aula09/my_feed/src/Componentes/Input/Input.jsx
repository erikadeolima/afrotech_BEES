import React from "react";
import './Input.css'

function Input(props){
  return(
    <input type="text" id={`${props.name}-input`}/>
  );
};

export default Input;