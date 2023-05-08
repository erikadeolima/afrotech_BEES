import React, { useState, useEffect } from "react";
import postsContent from "../../untils/postsContent";
import './Publisher.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

const newPost = {
  "userName": "Fulano de Tal",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate felis metus, et hendrerit felis sodales eget. Fusce fringilla vitae est at laoreet. Nulla dui erat, egestas non lectus eget, scelerisque malesuada purus. Suspendisse id fermentum nibh. Etiam laoreet dapibus lectus et pharetra. Vestibulum mollis, sapien pretium vestibulum viverra, nisl."
}

function Publisher(props){
//   const [text, setText] = useState('');
//   const [post, setPost] = useState(postsContent);

//   useEffect(()=>{
//     console.log("post",post);
//   },[post]);

//   const publicar = ()=>{
//     //e.target.value
//     let publisher=postsContent.push(newPost);
//     console.log(publisher);
//     setPost(publisher);
//   };
//   const changeHandler = (event) => {
//     setText(event.value);
// };
  return(
    <div>
      <Input 
      name="post"
      // value={text}
      // change={changeHandler}
      />
      <Button 
      name="publicar"
      // onClick={publicar}
      />
    </div>
  );
}

export default Publisher;