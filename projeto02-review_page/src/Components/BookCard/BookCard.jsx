import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import './BookCard.css';

function BookCard(props) {

  function createStars(stars) {
    let starsGiven = [];
    for (let i = 1; i <= stars; i++) {
      starsGiven.push(<span id={`${i}-star-rate`}>{<AiTwotoneStar />}</span>)
    }
    return starsGiven;
  }
  if (props.bookcase) {
    return (
      <div className="bookCard-bookcase" id={props.id}>
        <img id="book-cover-bookcase" src={props.image} alt={props.legend} />
        <div id="star-rate-bookcase">{createStars(props.stars)}</div>
      </div>
    )
  };
  if (props.favorites) {
    return (
      <div className="bookCard-favorites" id={props.id}>
        <img id="book-cover-bookcase" src={props.image} alt={props.legend} />
        <div id="star-rate-bookcase">{createStars(props.stars)}</div>
      </div>
    )
  };
  if (props.review) {
    return (<div className="bookCard-review" id={props.id}>
      <img id="book-cover-reviewed" src={props.image} alt={props.legend} />
      <span id="book-review">
        <h4 id="book-title-reviewed">{props.titleBook}</h4>
        <p id="book-review-text">{props.reviewBook}</p>
      </span>
    </div>);
  }
};

export default BookCard;