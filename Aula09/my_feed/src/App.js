import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Divider from './Componentes/Divider/Divider';
import myFeed from './Images/myFeed.svg';
import Input from './Componentes/Input/Input';
import Button from './Componentes/Button/Button'

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
    </div>
  );
}

export default App;
