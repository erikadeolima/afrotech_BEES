import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import BookCard from "../../Components/BookCard/BookCard";
import { CgBee } from "react-icons/cg";
import './WhishList.css';
import storage from "../../Context/Context";

function WhishList() {
  const {
    getWishListFromLS, booksInfo } = useContext(storage);

  useEffect(() => {
    getWishListFromLS();
  }, []
  );
  return (
    <div className="whishlist">
      <Header
        imageProfile={<CgBee />}
      />
      <div className="test-area">
        <Menu />
        <div className="whishlist">
          <h1 id="whishlist-title">Meus Favoritos</h1>
          {/* <div id="whishlist-books">
            {
              booksInfo
                .filter(whish => whishlist.includes(whish.id))
                .map((book) => (
                  console.log(book)
                ))
            }
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhishList;