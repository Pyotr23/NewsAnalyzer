import React from "react";
import "./card.css";
import stubImage from "../../images/cards/womanyellingcat.jpg";
import Ref from "../ref/ref";
import { QUESTION_RUSSIAN_MONTH_NAMES }  from "../../ts/constants";
import { ITableRow } from "../../ts/types";

interface ICardProps {
  url: string,
  imageSource: string,
  contentDate: Date,
  title: string,
  text: string,
  author: string
}

interface ICardState {
  isLoaded: boolean
}

class Card extends React.Component<ICardProps, ICardState>{
  constructor(props: ICardProps){
    super(props);
  }

  state = {
    isLoaded: false
  }

  private format = (dateTime: Date): string => {
    const date = new Date(dateTime);
    const day = date.getDate();
    const month = QUESTION_RUSSIAN_MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  private addStubImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = stubImage;

  render() {
    const { url, imageSource, contentDate, title, text, author } = this.props;
    return <li className="card">
      <Ref href={url} modClassNames="ref_place_card">
        <div className="card__container">
          <img className="card__image" src={ imageSource } alt="заглавная картинка" onError={ this.addStubImage }/>
          <div className="card__text-content">
            <p className="card__text-date">{this.format(contentDate)}</p>
            <h3 className="card__title">{title}</h3>
            <p className="card__text">{text}</p>
          </div>
        </div>
        <p className="card__source">{author}</p>
      </Ref>
    </li>

  }
}

export default Card;
