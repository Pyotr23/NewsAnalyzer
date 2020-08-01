import React from 'react';
import './title.css';

const Title:React.FC<{title: string, modificatorClassName: string}> =
  ({title, modificatorClassName}) =>
  {
    const classes = `title ${modificatorClassName}`;
    return <h2 className={classes}>
        {title}
    </h2>
  };

export default Title;
