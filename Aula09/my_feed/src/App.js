import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Divider from './Componentes/Divider/Divider';
import myFeed from './Images/myFeed.svg';

function App() {
  return (
    <div className="App">
      <Header 
      name="my_feed"
      src={myFeed}/>
      <Divider 
      name="header"/>
    </div>
  );
}

export default App;
