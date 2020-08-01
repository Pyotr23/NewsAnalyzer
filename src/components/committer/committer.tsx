import React, { FunctionComponent } from "react";
import "./committer.css";

type CommitterProps = {
  avatarSrc: string,
  name: string,
  mail: string
}

const Committer: FunctionComponent<CommitterProps> = ({ avatarSrc, name, mail }) => (
  <div className="committer">
    <img className="committer__avatar" src={avatarSrc} alt="фото" />
    <div>
      <h4 className="committer__name">{name}</h4>
      <p className="committer__mail">{mail}</p>
    </div>
  </div>
)

export default Committer;
