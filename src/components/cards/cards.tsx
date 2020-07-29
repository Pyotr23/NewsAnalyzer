import React, { Component } from "react";
import "./cards.css";
import Title from "../title/title";
import Ref from "../ref/ref";
import Card from "../card/card";
import Button from "../button/button";

class Cards extends Component {
  render() {
    const initialCards = [{
      // imageSource: process.env.PUBLIC_URL + "/images/cards/" + "first.jpg",
      contentDate: "2 августа, 2019",
      title: "Национальное достояние - парки",
      text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков...",
      source: "лента.ру"
    },
    {
      // imageSource: process.env.PUBLIC_URL + "/images/cards/" + "first.jpg",
      contentDate: "2 августа, 2019",
      title: "Национальное достояние - парки",
      text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков...",
      source: "лента.ру"
    },
    {
      // imageSource: process.env.PUBLIC_URL + "/images/cards/" + "first.jpg",
      contentDate: "2 августа, 2019",
      title: "Национальное достояние - парки",
      text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков...",
      source: "лента.ру"
    }
  ];

    return (
      <main className="cards">
        <Title title="Результаты поиска" modificatorClassName="title_place_cards"/>
        <Ref text="Посмотреть аналитику >" href="/analytics" modClassNames="ref_place_cards"/>
        <ul className="cards__list">
          {initialCards.map(({ contentDate, title, text, source }) => (
            <Card key="1" contentDate={contentDate} title={title} text={text} source={source}/>
          ))}
        </ul>
        <Button text="Показать ещё" modificatorClassName="button_place_cards"/>
      </main>
    )
  }
}

export default Cards;
