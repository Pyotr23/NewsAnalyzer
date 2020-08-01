import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./ref.css";

type RefProps = {
  text?: string,
  href: string,
  modClassNames?: string
}

const Ref: FunctionComponent<RefProps> = ({text, href, modClassNames, children})  => {
  const classes = `ref ${modClassNames}`;
  return href.startsWith("http")
    ? <a className={classes} href={href} target="_blank">{text}{children}</a>
    : <Link className={classes} to={href}>{text}{children}</Link>;
}

Ref.defaultProps = {
  modClassNames: ""
}

export default Ref;
