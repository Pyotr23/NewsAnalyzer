import React from "react";
import "./card.css";
import stubImage from "../../images/cards/womanyellingcat.jpg";
import { ICard } from "../../ts/types";
import Ref from "../ref/ref";
import { RUSSIAN_MONTH_NAMES }  from "../../ts/constants";

const Card = ({ url, imageSource, contentDate, title, text, author}: ICard) => (
  <li className="card">
    <Ref href={url} modClassNames="ref_place_card">
      <div className="card__container">
        <img className="card__image" src={imageSource ? imageSource : stubImage} alt="заглавная картинка"/>
        <div className="card__text-content">
          <p className="card__text-date">{format(contentDate)}</p>
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{text}</p>
        </div>
      </div>
      <p className="card__source">{author}</p>
    </Ref>
  </li>
)

const format = (dateTime: Date): string => {
  const date = new Date(dateTime);
  const day = date.getDay();
  const month = RUSSIAN_MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

export default Card;
