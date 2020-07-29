import React from "react";
import "./table.css";

const Table = () => {

  return <div className="table">
    <p className="table__header">Дата (август)</p>
    <p className="table__header">Кол-во упоминаний</p>
    <div className="table__line"></div>
    <p className="table__day">19, пн</p>
    <p className="table__percent">15</p>
    <p className="table__day">20, вт</p>
    <p className="table__percent">15</p>
    <p className="table__day">21, ср</p>
    <p className="table__percent">15</p>
    <p className="table__day">22, чт</p>
    <p className="table__percent">15</p>
    <p className="table__day">23, пт</p>
    <p className="table__percent">15</p>
    <p className="table__day">24, сб</p>
    <p className="table__percent">15</p>
    <p className="table__day">25, вс</p>
    <p className="table__percent">15</p>
  </div>
}
export default Table;
