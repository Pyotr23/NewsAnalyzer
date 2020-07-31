import React, { Component } from "react";
import "./cards.css";
import Title from "../title/title";
import Ref from "../ref/ref";
import Card from "../card/card";
import Button from "../button/button";

class Cards extends Component {
  render() {
    const initialCards = [{
      contentDate: "2 августа, 2019",
      title: "Национальное достояние - парки",
      text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "лента.ру"
    },
    {
      contentDate: "2 августа, 2019",
      title: "Национальное достояние - парки",
      text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "лента.ру"
    },
    {
      contentDate: "2 августа, 2019",
      title: "Национальное достояние - парки",
      text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "лента.ру"
    },
    {
      contentDate: "2 августа, 2019",
      title: "Национальное достояние - парки",
      text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "лента.ру"
    },
    {
      contentDate: "2 августа, 2019",
      title: "Национальное достояние - парки",
      text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "лента.ру"
    }
  ];

    return (
      <section className="cards">
        <div className="cards__header">
          <Title title="Результаты поиска" modificatorClassName="title_place_cards"/>
          <Ref text="Посмотреть аналитику >" href="/analytics" modClassNames="ref_place_cards"/>
        </div>
        <ul className="cards__list">
          {initialCards.map(({ contentDate, title, text, source }) => (
            <Card key="1" contentDate={contentDate} title={title} text={text} source={source}/>
          ))}
        </ul>
        <Button text="Показать ещё" modificatorClassName="button_place_cards"/>
      </section>
    )
  }
}

export default Cards;
