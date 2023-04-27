import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Ilustration from './Components/Ilustration/Ilustration';
import Text from './Components/Text/Text';


function App() {
  return (
    <div className="App">
      <Header />
      <Ilustration about="lorem"/>
      <Text />
    </div>
  );
}

export default App;
