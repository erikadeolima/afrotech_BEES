import React, { useContext, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Provider from './Context/Provider';
import "@fontsource/luckiest-guy";
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Wishlist from './Pages/Wishlist';
import Review from './Pages/Review';


function App() {
  return (
    <Provider>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/favorites" Component={Favorites} />
          <Route path="/wishlist" Component={Wishlist} />
          {/* <Route path="/rated" Component={Rated} /> */}
          <Route path="/reviews" Component={Review} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
