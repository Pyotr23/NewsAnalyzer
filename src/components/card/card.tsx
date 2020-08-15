import React from "react";
import "./card.css";
import image from "../../images/cards/first.jpg";
import { ICard } from "../../ts/types";
import Ref from "../ref/ref";

const Card = ({ url, imageSource, contentDate, title, text, author}: ICard) => (
  <li className="card">
    <Ref href={url} modClassNames="ref_place_card">
      <img className="card__image" src={imageSource} alt="заглавная картинка"/>
      <div className="card__text-content">
        <p className="card__text-date">{contentDate}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <p className="card__source">{author}</p>
      </div>
    </Ref>
  </li>
)

export default Card;
