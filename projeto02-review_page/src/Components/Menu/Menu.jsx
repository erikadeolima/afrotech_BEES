import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';
import { AiOutlineHeart, AiOutlineGift, AiOutlineStar, AiOutlineComment, AiOutlineHome } from 'react-icons/ai';

function Menu() {
  return (
    <div className="menu-div">
      <ul>
        <li>
          <Link className="menu-li-item" to="/favorites">
            <p><span id='favorite-icon'>{<AiOutlineHeart />}</span> Favoritos</p>
          </Link>
        </li>
        <li>
          <Link className="menu-li-item" to="/wishlist">
            <p><span id='wishlist-icon'>{<AiOutlineGift />}</span> Desejados</p></Link>

        </li>
        <li>
          <Link className="menu-li-item" to="/rated">
            <p><span id='rated-icon'>{<AiOutlineStar />}</span> Avaliados</p></Link>

        </li>
        <li>
          <Link className="menu-li-item" to="/reviews">
            <p><span id='reviewed-icon'>{<AiOutlineComment />}</span> Resenhas</p></Link>

        </li>
      </ul>
    </div>
  )
}

export default Menu;
