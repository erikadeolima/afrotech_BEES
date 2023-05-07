import React from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import { CgBee } from "react-icons/cg";
import './Favorites.css';
import FavoritesBook from "../../Components/FavoritesBooks/FavoritesBooks";

function Favorites() {
  return (
    <div className="Favorites">
      <Header
        imageProfile={<CgBee />}
      />
      <div className="bloco-1">
        <Menu />
        <FavoritesBook />
      </div>
    </div>
  );
};

export default Favorites;
