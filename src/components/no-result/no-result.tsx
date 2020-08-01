import "./no-result.css";
import React from "react";
import image from "../../images/no-result/not-found.svg";
import Title from "../title/title";

const NoResult = () => (
  <div className="no-result">
    <img className="no-result__image" src={image} alt="грустная лупа"/>
    <Title title="Ничего не найдено" modificatorClassName="title_place_no-result"/>
    <p className="no-result__text">К сожалению по вашему запросу ничего не найдено.</p>
  </div>
)

export default NoResult;
