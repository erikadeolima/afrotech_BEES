import React from "react";
import './Picture.css';

function Picture(props){
  return(
    <img className={`${props.component}-image`} src={props.src} alt={props.name}/>
  );
}

export default Picture;