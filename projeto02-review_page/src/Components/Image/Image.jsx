import React from "react";
function Image(props){
  <div className={`${props.alt}-image`}>
    <img src={props.url} alt={props.alt} />
  </div>
}

export default Image;
