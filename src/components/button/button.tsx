import React from 'react';
import './button.css';

const Button:React.FC<{text: string, modificatorClassName: string}> =
  ({text, modificatorClassName}) =>
  {
    const classes = `button ${modificatorClassName} `;
    return <button className={classes}>
        {text}
    </button>
  };

  export default Button;
