import React from "react";
import './Picture.css';

function Picture(props){
  return(
    <img id={`${props.name}-image`} src={props.src} alt={props.name}/>
  );
}

export default Picture;