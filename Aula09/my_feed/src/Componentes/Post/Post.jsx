import React from "react";
import './Post.css';
import Picture from "../Picture/Picture";
import Button from "../Button/Button";

function Post(props){
  return(
    <div>
      <div className="image">
        <Picture
        component="post"
        name={`${props.userName}`}
        src={props.src}
        />
      </div>
      <div>
        <h4>{props.userName}</h4>
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