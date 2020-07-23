import React from "react";
import "./cards.css";
import Title from "../title/title";
import Link from "../link/link";

const Cards = () => (
  <section className="cards">
    <Title title="Результаты поиска" modificatorClassName="title_place_cards"/>
    <Link text="Посмотреть аналитику >" modClassNames="link_place_cards"/>
  </section>
)

export default Cards;
