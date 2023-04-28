import React from "react";
import './Divider.css';

function Divider(props){
  return(
    <hr id={`${props.name}-divider`}/>
  );
}

export default Divider;