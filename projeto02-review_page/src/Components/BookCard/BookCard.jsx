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
      <div className={`bookCard-${props.type}`} id={props.id}>
        <img className={`book-cover-${props.type}`} src={props.image} alt={props.legend} />
        <div id="star-rate-bookcase">{createStars(props.stars)}</div>
      </div>
    )
  };
  if (props.type === "favorites") {
    return (
      <div className={`bookCard-${props.type}`} id={props.id}>
        <img className={`book-cover-${props.type}`} src={props.image} alt={props.legend} />
        <h4 className={`book-title-${props.type}`}>{props.titleBook}</h4>
      </div>
    )
  };
  return (<div className={`bookCard-${props.type}`} id={props.id}>
    <img className={`book-cover-${props.type}`} src={props.image} alt={props.legend} />
    <span id="book-review">
      <h4 className={`book-title-${props.type}`}>{props.titleBook}</h4>
      <p className={`book-text-${props.type}`}>{props.reviewBook}</p>
    </span>
  </div>);
};

export default BookCard;