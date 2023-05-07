import React, { useContext, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Provider from './Context/Provider';
import storage from './Context/Context';
import "@fontsource/luckiest-guy";
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import WhishList from './Pages/WhishList';


function App() {
  return (
    <Provider>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/favorites" Component={Favorites} />
          <Route path="/whishlist" Component={WhishList} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
