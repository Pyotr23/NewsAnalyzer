import React from "react";
import "./commits.css";
import Title from "../title/title";
import Swiper from "../swiper/swiper";
import Button from "../button/button";

const Commits = () => (
  <section className="commits">
    <Title title="История коммитов из&nbsp;GitHub" modificatorClassName="title_place_commits"/>
    <Swiper />
    <Button text="Открыть в GitHub" modificatorClassName="button_place_commits" />
  </section>
)

export default Commits;
