import React from 'react';
import './input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({ error, ...rest }: InputProps) => (
  <div className="input">
    <input className="input__item" {...rest}></input>
    {error && <p className="input__error">{error}</p>}
  </div>
);

export default Input;
