import React from "react";
import './Post.css';
import Picture from "../Picture/Picture";
import Button from "../Button/Button";

function Post(props){
  return(
    <div className="post">
      <div className="image">
        <Picture
        name={props.iName}
        src={props.src}
        />
      </div>
      <div>
        <p>{props.text}</p>
      </div>
      <div className="buttons">
        <Button
        name="curtir"
        />
        <Button
        name="compartilhar"
        />
      </div>
    </div>
  );
}

export default Post;