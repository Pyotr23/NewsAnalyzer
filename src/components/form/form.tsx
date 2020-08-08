import React, { Component } from "react";
import "./form.css";
import Button from '../button/button';
import { IFormProps } from "../../ts/types";

const Form = ({ errorText, onChange, onSubmit, inputStyle }: IFormProps) => (
  <form className="form" onSubmit={ onSubmit }>
    <div className="form__input-container">
      <input className={ inputStyle } type="text" placeholder="Программирование" onChange={ onChange }></input>
        {errorText && <p className="form__input-error">{errorText}</p>}
    </div>
    <Button text="Искать" modificatorClassName="button_active_blue"/>
  </form>
)

export default Form;
