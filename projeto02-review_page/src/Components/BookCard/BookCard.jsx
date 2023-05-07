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
  if (props.type === "bookcase") {
    return (
      <div className={`bookCard${props.type}`} id={props.id}>
        <img id="book-cover-bookcase" src={props.image} alt={props.legend} />
        <div id="star-rate-bookcase">{createStars(props.stars)}</div>
      </div>
    )
  };
  if (props.type === "favorites") {
    return (
      <div className="bookCard-favorites" id={props.id}>
        <img id="book-cover-bookcase" src={props.image} alt={props.legend} />
        <div id="star-rate-bookcase">{createStars(props.stars)}</div>
      </div>
    )
  };
  if (props.type === "review") {
    return (<div className="bookCard-review" id={props.id}>
      <img id="book-cover-reviewed" src={props.image} alt={props.legend} />
      <span id="book-review">
        <h4 id="book-title-reviewed">{props.titleBook}</h4>
        <p id="book-review-text">{props.reviewBook}</p>
      </span>
    </div>);
  }
  if (props.type === "recommended") {
    return (<div className="bookCard-review" id={props.id}>
      <img id="book-cover-reviewed" src={props.image} alt={props.legend} />
      <span id="book-review">
        <h4 id="book-title-reviewed">{props.titleBook}</h4>
        <p id="book-review-text">{props.reviewBook}</p>
      </span>
    </div>)
  }
  if (props.type === "whishlist") {
    return (<div className="bookCard-review" id={props.id}>
      <img id="book-cover-reviewed" src={props.image} alt={props.legend} />
      <span id="book-review">
        <h4 id="book-title-reviewed">{props.titleBook}</h4>
        <p id="book-review-text">{props.reviewBook}</p>
      </span>
    </div>)
  }
};

export default BookCard;