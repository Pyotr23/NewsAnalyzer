import React from "react";
import "./commits.css";
import Title from "../title/title";
import Swiper from "../swiper/swiper";
import Button from "../button/button";
import Ref from "../ref/ref";

const Commits = () => (
  <section className="commits">
    <div className="commits__header">
      <Title title="История коммитов из&nbsp;GitHub" modificatorClassName="title_place_commits"/>
      <Ref href="https:\\github.com" modClassNames="ref_place_commits">Открыть в Github &#62;</Ref>
    </div>
    <Swiper />
    <Button text="Открыть в GitHub" modificatorClassName="button_place_commits" />
  </section>
)

export default Commits;
