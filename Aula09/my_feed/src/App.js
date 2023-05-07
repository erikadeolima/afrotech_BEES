import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Divider from './Componentes/Divider/Divider';
import myFeed from './Images/myFeed.svg';
import Publisher from './Componentes/Publisher/Publisher';
import Post from './Componentes/Post/Post';
import userProfile from './Images/userSolid.svg';
import postsContent from './untils/postsContent.js';

function App() {
  return (
    <div className="App">
      <Header
      component="header"
      name="my_feed"
      src={myFeed}/>
      <Divider 
      name="header"/>
      <Publisher
      component="publisher"
      />
      <Divider 
      name="post"/>
      {postsContent.map((post) => (
        <Post key={post.userName}
        component="post"
        name={post.userName}
        src={userProfile}
        userName={post.userName}
        text={post.text}
        />
        ))}
    </div>
  );
}

export default App;
