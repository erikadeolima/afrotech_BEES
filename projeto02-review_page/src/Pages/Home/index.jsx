import React from "react";
import Bookcase from '../../Components/Bookcase/Bookcase';
import Header from '../../Components/Header/Header';
import { CgBee } from "react-icons/cg";
import ReviewBook from '../../Components/ReviewBook/ReviewBook';
import Menu from '../../Components/Menu/Menu';
import './Home.css';
import RecomendedBooks from "../../Components/Recomended/Recomended";

function Home() {
  return (
    <div className="Home">
      <Header
        imageProfile={<CgBee />}
      />
      <hr />
      <div className="test-area">
        <Menu />
        <Bookcase />
      </div>
      <hr />
      <ReviewBook />
      <hr />
      <RecomendedBooks />

    </div>
  )
};

export default Home;