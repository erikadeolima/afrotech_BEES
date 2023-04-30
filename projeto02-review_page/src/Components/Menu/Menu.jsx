import React from "react";
import './Menu.css';
import {AiOutlineHeart, AiOutlineGift, AiOutlineStar, AiOutlineComment} from 'react-icons/ai';

function Menu(){
  return(
    <div className="menu-div">
      <ul>
      <li>
        <p><span id='favorite-icon'>{<AiOutlineHeart/>}</span>Favoritos</p>
      </li>
      <li>
        <p><span id='whishlist-icon'>{<AiOutlineGift/>}</span>Desejados</p>
      </li>
      <li>
        <p><span id='rated-icon'>{<AiOutlineStar/>}</span>Avaliados</p>
      </li>
      <li>
        <p><span id='reviewed-icon'>{<AiOutlineComment/>}</span>Resenhas</p>
      </li>
    </ul>
    </div>
  )
}

export default Menu;
