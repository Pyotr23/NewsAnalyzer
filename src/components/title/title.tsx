import React from 'react';
import './title.css';

const Title:React.FC<{title: string, modificatorClassName: string}> =
  ({title, modificatorClassName}) =>
  {
    const classes = `title ${modificatorClassName}`;
    return <h1 className={classes}>
        {title}
    </h1>
  };

export default Title;
