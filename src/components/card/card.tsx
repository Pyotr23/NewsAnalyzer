import React from "react";
import "./card.css";
import image from "../../images/cards/first.jpg";

type CardProps = {
  imageSource?: string,
  contentDate: string,
  title: string,
  text: string,
  source: string
}

const Card = ({imageSource, contentDate, title, text, source}: CardProps) => (
  <li className="card">
    <img className="card__image" src={image}/>
    <div className="card__text-content">
      <p className="card__text-date">{contentDate}</p>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <p className="card__source">{source}</p>
    </div>
  </li>
)

export default Card;
