import React from "react";
import "./swiper.css";
import Flickity from "react-flickity-component";
import "../../../node_modules/flickity/css/flickity.css";
import CommitCard from "../commit-card/commit-card";

const Swiper = () => {
  const flickityOptions = {
    initialIndex: 2
}
  return <Flickity
    className={"swiper"} // default ''
    elementType={"div"} // default 'div'
    // options={flickityOptions} // takes flickity options {}
    // disableImagesLoaded={false} // default false
    // reloadOnUpdate // default false
    // static // default false
  >
    <CommitCard
      date="14 августа, 2019"
      message="Emmet (formerly Zen Coding) is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow."/>
    <CommitCard
      date="14 августа, 2019"
      message="Emmet (formerly Zen Coding) is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow."/>
    <CommitCard
      date="14 августа, 2019"
      message="Emmet (formerly Zen Coding) is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow."/>
  </Flickity>
}

export default Swiper;
