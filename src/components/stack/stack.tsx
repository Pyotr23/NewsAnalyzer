import React from "react";
import "./stack.css";
import Title from "../title/title";
import Technology from "../technology/technology";
import htmlSrc from "../../images/stack/html.svg";
import cssSrc from "../../images/stack/css.svg";
import jsSrc from "../../images/stack/js.svg";
import webpackSrc from "../../images/stack/webpack.svg";

const Stack = () => (
  <section className="stack">
    <Title title="Используемые технологии" modificatorClassName="title_place_stack"/>
    <ul className="stack__list">
      <li>
        <Technology name="HTML" src={htmlSrc} alt="иконка HTML" />
      </li>
      <li>
        <Technology name="CSS" src={cssSrc} alt="иконка CSS" />
      </li>
      <li>
        <Technology name="Java Script" src={jsSrc} alt="иконка JS" />
      </li>
      <li>
        <Technology name="Webpack" src={webpackSrc} alt="иконка Webpack" />
      </li>
    </ul>
  </section>
)

export default Stack;
