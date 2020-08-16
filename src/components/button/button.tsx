import React from 'react';
import './button.css';

const Button:React.FC<{text: string, modificatorClassName: string, handleClick?: () => void, type?: "button" | "submit" }> =
  ({text, modificatorClassName, handleClick, type = "button" }) =>
  {
    const classes = `button ${modificatorClassName} `;
    return <button className={classes} type={ type } onClick={ handleClick }>
        {text}
    </button>
  };

  export default Button;
