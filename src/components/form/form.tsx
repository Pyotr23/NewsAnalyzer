import React, { Component } from "react";
import "./form.css";
import Button from '../button/button';
import NewsApi from "../../ts/modules/NewsApi";
import { INewsResponse, FormProps, FormState } from "../../ts/types";

class Form extends Component<FormProps, FormState> {

  // constructor(props: FormProps) {
  //   super(props);
  //   this.state = {
  //     value: "",
  //     error: "",
  //     isValid: false
  //   };
  // }

  // handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const { value } = e.target;
  //   let { error, isValid } = this.state;
  //   isValid = value.length !== 0;
  //   error = isValid
  //     ? ""
  //     : this.props.error;
  //   this.setState({
  //     value,
  //     error,
  //     isValid
  //   });
  // }

  // handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   let { error, isValid, value } = this.state;
  //   isValid = value.length !== 0;
  //   error = isValid
  //     ? ""
  //     : "Проблеме";
  //   this.setState({
  //     value,
  //     error,
  //     isValid
  //   });
  //   if (isValid){
  //     NewsApi<INewsResponse>(value)
  //       .then((resp) => { console.log(resp) })
  //   }
  //   else {
  //     console.log("Плохо!");
  //   }
  // }

  render() {
    const { errorText, onChange, onSubmit, inputStyle } = this.props;
    return <form className="form" onSubmit={ onSubmit }>
      <div className="form__input-container">
        <input className={ inputStyle } type="text" placeholder="Программирование" onChange={ onChange }></input>
          {errorText && <p className="form__input-error">{errorText}</p>}
      </div>
      <Button text="Искать" modificatorClassName="button_active_blue"/>
    </form>
  };
}



export default Form;
