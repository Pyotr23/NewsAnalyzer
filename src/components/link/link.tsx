import React, { FunctionComponent } from "react";
import "./link.css";

type LinkProps = {
  text: string,
  href?: string,
  modClassNames: string,
}

const Link = ({text, href = "#", modClassNames}: LinkProps)  => {
  const classes = `link ${modClassNames}`;
  return <a className={classes} href={href} target="_blank">{text}</a>;
}



export default Link;
