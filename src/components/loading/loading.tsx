import './loading.css';
import React from 'react';
import {ILoadingProps} from "../../ts/types";

const Loading = ({isVisible}: ILoadingProps) => (
  <div className={isVisible ? "loading loading_visible" : "loading"}>
    <i className="loading__spinner"/>
    <p className="loading__text">Идёт загрузка новостей...</p>
  </div>
)

export default Loading;
