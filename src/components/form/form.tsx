import React from 'react';
import './form.css';
import Button from '../button/button';

const Form = () => (
  <form className="form">
    <input className="form__input" type="text" placeholder="Программирование"></input>
    <Button text="Искать" modificatorClassName=""/>
  </form>
);

export default Form;
