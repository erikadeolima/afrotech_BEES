import './App.css';
import Bookcase from './Components/Bookcase/Bookcase';
import Header from './Components/Header/Header';
import readersInfo from './untils/readersInfo';
import {CgBee} from "react-icons/cg";
import ReviewBook from './Components/ReviewBook/ReviewBook';
import Menu from './Components/Menu/Menu';
import "@fontsource/luckiest-guy";


function App() {
  return (
    <div className="App">
      <Header
      imageProfile={<CgBee />}
      userName={readersInfo[0].userName}
      readBooks={readersInfo[0].readBooks}
      toReadBooks={readersInfo[0].toReadBooks}
      /> 
      <hr/>
      
      <div className="test-area">
      <Menu />
      <Bookcase />
      </div>
      <hr/>
      <ReviewBook />
    
    </div>
  );
}

export default App;
