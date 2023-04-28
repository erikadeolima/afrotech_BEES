import React from "react";
import './Divider.css';

function Divider(props){
  return(
    <divider id={`${props.name}-divider`}/>
  );
}

export default Divider;