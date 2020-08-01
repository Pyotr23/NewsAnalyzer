import React, { FunctionComponent } from "react";
import "./technology.css";
import "../../fonts/fonts.css";

type TechProps = {
  name: string,
  src: string,
  alt: string
}

const Technology: FunctionComponent<TechProps> = ({ name, src, alt }) => (
  <figure className="technology">
    <figcaption className="technology__name">{name}</figcaption>
    <img src={src} alt={alt}/>
  </figure>
)

export default Technology;
