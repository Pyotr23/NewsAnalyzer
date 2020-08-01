import React from 'react';
import './author.css';
import Title from "../title/title";
import photo from "../../images/author/avatar.jpg";

const Author = () => (
  <section className="author">
    <div className="author__photo-wrapper">
      <img className="author__photo" src={photo} alt="фотография автора"/>
    </div>
    <div className="author__column">
      <Title title="Об авторе" modificatorClassName="title_place_author" />
      <p className="author__description">
        Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь,
        какими технологиями разработки владеете.
      </p>
      <p className="author__description">
        Также можно рассказать о процессе обучения в Практикуме,
        чему вы тут научились, и чем можете помочь потенциальным заказчикам.
      </p>
      <p className="author__description">
        Если хотите, оставьте свои контакты: email и телефон.
        Так заказчики смогут с вами связаться.
      </p>
    </div>
  </section>
);

  export default Author;
