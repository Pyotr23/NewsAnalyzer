import React from 'react';
import './form.css';
import Button from '../button/button';

const Form = () => (
  <form className="form">
    <input className="form__input" type="text" placeholder="Программирование" required></input>
    <Button text="Искать" modificatorClassName="button_active_blue"/>
  </form>
);

export default Form;
