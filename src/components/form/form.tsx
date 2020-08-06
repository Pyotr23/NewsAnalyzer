import React, { Component, FormHTMLAttributes } from "react";
import "./form.css";
import Button from '../button/button';
import NewsApi, { INewsResponse } from "../../ts/modules/NewsApi";

interface FormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

type FormState = {
  value: string,
  error: string,
  isValid: boolean
}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      value: "",
      error: "",
      isValid: false
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    let { error, isValid } = this.state;
    isValid = value.length !== 0;
    error = isValid
      ? ""
      : "Нужно ввести ключевое слово";
    this.setState({
      value,
      error,
      isValid
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { error, isValid, value } = this.state;
    isValid = value.length !== 0;
    error = isValid
      ? ""
      : "Нужно ввести ключевое слово";
    this.setState({
      value,
      error,
      isValid
    });
    if (isValid){
      NewsApi<INewsResponse>(value)
        .then((resp) => { console.log(resp) })
    }
    else {
      console.log("Плохо!");
    }
  }

  render() {
    const { error, isValid } = this.state;
    let inputClassNames = "form__input"
    inputClassNames += !error || isValid ? "" : " form__input_error";
    return <form className="form" onSubmit={this.handleSubmit}>
      <div className="form__input-container">
        <input className={inputClassNames} type="text" placeholder="Программирование" onChange={this.handleChange}></input>
          {error && <p className="form__input-error">{error}</p>}
      </div>
      <Button text="Искать" modificatorClassName="button_active_blue"/>
    </form>
  };
}



export default Form;
