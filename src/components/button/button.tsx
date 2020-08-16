import React, { Component } from 'react';
import './button.css';

type ButtonProps = {
  text: string,
  modificatorClassName: string,
  handleClick?: () => void,
  type?: "button" | "submit"
}

class Button extends Component<ButtonProps & React.HTMLProps<HTMLButtonElement>, {}>{
  constructor(props: ButtonProps & React.HTMLProps<HTMLButtonElement>){
    super(props);
  }

  render() {
    const { modificatorClassName, type, handleClick, text, disabled } = this.props;
    const classes = `button ${modificatorClassName} `;
    return <button className={classes} type={ type } onClick={ handleClick } disabled={ disabled }>
        {text}
    </button>
  }
}

// const Button:React.FC<{text: string, modificatorClassName: string, handleClick?: () => void, type?: "button" | "submit" }> =
//   ({text, modificatorClassName, handleClick, type = "button" }) =>
//   {
//     const classes = `button ${modificatorClassName} `;
//     return <button className={classes} type={ type } onClick={ handleClick }>
//         {text}
//     </button>
//   };

  export default Button;
