import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Divider from './Componentes/Divider/Divider';
import myFeed from './Images/myFeed.svg';
import Input from './Componentes/Input/Input';
import Button from './Componentes/Button/Button'
import Post from './Componentes/Post/Post';

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
      <Post
      iName="fulano"
      src=""
      text="zkjsdlgfhn saflçsk f n zslkfj çisçfjksf \çs ijf slkfjm"
      />
    </div>
  );
}

export default App;
