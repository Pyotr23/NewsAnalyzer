import React from "react";
import "./digits.css";
import Title from "../title/title";

const Digits = () => (
  <section className="digits">
    <Title title="Вы спросили: «Путешествия»" modificatorClassName="title_place_digits"/>
    <p className="digits__description">
      Новостей за неделю: <b>34 324</b>
    </p>
    <p className="digits__description">
      Упоминаний в заголовках: <b>235</b>
    </p>
  </section>
)

export default Digits;
