import React, { FunctionComponent } from "react";
import "./commit-card.css";
import "../committer/committer";
import Committer from "../committer/committer";
import avatar from "../../images/committer/committer-photo.jpg";

type CommiCardProps = {
  date: string,
  message?: string
}

const CommitCard: FunctionComponent<CommiCardProps> = ({ date, message = "" }) => (
  <div className="commit-card">
    <p className="commit-card__date">
      {date}
    </p>
    <Committer avatarSrc={avatar} name="Антон Дмитриев" mail="anton@yandex.ru"/>
    <p className="commit-card__message">
      {message}
    </p>
  </div>
)

export default CommitCard;
