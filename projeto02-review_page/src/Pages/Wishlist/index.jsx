import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import BookCard from "../../Components/BookCard/BookCard";
import { CgBee } from "react-icons/cg";
import './Wishlist.css';
import storage from "../../Context/Context";

function Wishlist() {
  const {
    getWishListFromLS } = useContext(storage);
  const [wishList, setWishlist] = useState([]);

  useEffect(() => {
    const teste = getWishListFromLS();
    setWishlist(teste);
  }, []);
  return (
    <div className="Wishlist">
      <Header
        imageProfile={<CgBee />}
      />
      <div className="bloco-1">
        <Menu />
        <div className="wishlist">
          <h1 id="wishlist-title">Desejados</h1>
          <div id="wishlist-books">
            {
              wishList.map((book) => (
                <BookCard
                  key={book.titleBook}
                  id={book.id}
                  image={book.src}
                  titleBook={book.titleBook}
                  type={"wishlist"}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;