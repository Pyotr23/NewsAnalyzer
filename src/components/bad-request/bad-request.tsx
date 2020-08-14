import "./bad-request.css";
import React from "react";
import Title from "../title/title";

interface ITitleProps {
  title: string,
  modClassName: string
}

const BadRequest = ({ title, modClassName }: ITitleProps) => (
  <div className="bad-request">
    <Title title={ title } modificatorClassName={ modClassName }/>
  </div>
)

export default BadRequest;
