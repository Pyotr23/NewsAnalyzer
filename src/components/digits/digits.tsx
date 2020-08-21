import React, { Component } from "react";
import "./digits.css";
import Title from "../title/title";
import Ref from "../ref/ref";

type IDigitsProps = {
  question: string,
  total: number,
  countInTitle: number
}

class Digits extends Component<IDigitsProps, {}>{
  constructor(props: IDigitsProps){
    super(props);
  }

  render(){
    const { question, total, countInTitle } = this.props;
    const title = `Вы спросили: ${question}`;
    return <section className="digits">
      <Ref href="/" modClassNames="ref_place_digits">Главная</Ref><span className="digits__page-name"> / Аналитика</span>
      <Title title={ title } modificatorClassName="title_place_digits"/>
      <p className="digits__description">
        Новостей за неделю: <b>{ total }</b>
      </p>
      <p className="digits__description">
        Упоминаний в заголовках: <b>{ countInTitle }</b>
      </p>
    </section>
  }
}

export default Digits;
