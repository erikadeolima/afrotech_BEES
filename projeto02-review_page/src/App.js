import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Provider from './Context/Provider';
import "@fontsource/luckiest-guy";
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';


function App() {
  return (
    <Provider>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/favorites" Component={Favorites} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
