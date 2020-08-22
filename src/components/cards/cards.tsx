import React, { Component } from "react";
import "./cards.css";
import Title from "../title/title";
import Ref from "../ref/ref";
import Card from "../card/card";
import Button from "../button/button";
import { IArticle } from "../../ts/types";

type CardsProps = {
  news: IArticle[],
  showedCount: number,
  showMore: () => void
}

const Cards = ({ news, showedCount, showMore }: CardsProps) => {
  const hasMoreCards = news.length > showedCount;
  const buttonModificator = hasMoreCards ? "button_place_cards" : "button_place_cards button_disabled";
  return <section className="cards">
      <div className="cards__header">
        <Title title="Результаты поиска" modificatorClassName="title_place_cards"/>
        <Ref text="Посмотреть аналитику >" href="/analytics" modClassNames="ref_place_cards"/>
      </div>
      <ul className="cards__list">
        { news.slice(0, showedCount).map(({ source, title, description, url, urlToImage, publishedAt }, index) => (
          <Card key={ index } url={ url } imageSource={ urlToImage } contentDate={ publishedAt } title={ title } text={ description } author={ source?.name }/>
        ))}
      </ul>
      <Button text="Показать ещё" modificatorClassName={ buttonModificator } handleClick={ showMore } disabled={ hasMoreCards ? undefined : true }/>
    </section>
}


export default Cards;
