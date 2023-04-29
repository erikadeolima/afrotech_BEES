import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Divider from './Componentes/Divider/Divider';
import myFeed from './Images/myFeed.svg';
import Input from './Componentes/Input/Input';
import Button from './Componentes/Button/Button'
import Post from './Componentes/Post/Post';
// import userProfile from './Images/userSolid.svg';
import postsContent from './untils/postsContent.json';

function App() {
  return (
    <div className="App">
      <Header 
      name="my_feed"
      src={myFeed}/>
      <Divider 
      name="header"/>
      <Input 
      name="post"/>
      <Button 
      name="publicar"/>
      <Divider 
      name="post"/>
      {Object.keys(postsContent).map(([key, value],i) => (
        <Post key={i}
        name={value.userName}
        src={value.src}
        userName={value.userName}
        text={value.text}
        />
        ))}
    </div>
  );
}

export default App;
