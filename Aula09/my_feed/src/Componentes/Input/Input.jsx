import React from "react";
import './Input.css'

function Input(props){
  return(
    <input 
    type="text" 
    id={`${props.name}-input`}
    placeholder="O que estou pensando?"
    value={props.text}
    onChange={props.change}
    />
  );
};

export default Input;