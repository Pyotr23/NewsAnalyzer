import React from 'react';
import './form.css';
import Button from '../button/button';
import Input from "../input/input";

const Form = () => (
  <form className="form">
    <Input type="text" placeholder="Программирование" required error="Нужно ввести ключевое слово"/>
    <Button text="Искать" modificatorClassName="button_active_blue"/>
  </form>
);

export default Form;
