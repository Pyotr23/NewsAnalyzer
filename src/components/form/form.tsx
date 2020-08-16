import React from "react";
import "./form.css";
import Button from '../button/button';
import { IFormProps } from "../../ts/types";

const Form = ({ noValidateText, onChange, onSubmit, inputStyle }: IFormProps) => (
  <form className="form" onSubmit={ onSubmit }>
    <div className="form__input-container">
      <input className={ inputStyle } type="text" placeholder="Программирование" onChange={ onChange }></input>
        {noValidateText && <p className="form__input-error">{noValidateText}</p>}
    </div>
    <Button text="Искать" modificatorClassName="button_active_blue" type="submit"/>
  </form>
)

export default Form;
