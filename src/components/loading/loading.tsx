import './loading.css';
import React from 'react';

const Loading = () => (
  <div className="loading">
    <i className="loading__spinner"/>
    <p className="loading__text">Идёт загрузка новостей...</p>
  </div>
)

export default Loading;
