import React from "react";
import "./table.css";

const Table = () => {

  return <div className="table">
    <div className="table__row">
      <p className="table__first-column table__header">Дата (август)</p>
      <p className="table__second-column table__header">Кол-во упоминаний</p>
    </div>
    <div className="table__line"></div>
    <div className="table__row">
      <p className="table__first-column">19, пн</p>
      <p className="table__second-column">15</p>
    </div>
    <div className="table__row">
      <p className="table__first-column">20, вт</p>
      <p className="table__second-column">15</p>
    </div>
    <div className="table__row">
      <p className="table__first-column">21, ср</p>
      <p className="table__second-column">15</p>
    </div>
    <div className="table__row">
      <p className="table__first-column">22, чт</p>
      <p className="table__second-column">15</p>
    </div>
    <div className="table__row">
      <p className="table__first-column">23, пт</p>
      <p className="table__second-column">15</p>
    </div>
    <div className="table__row">
      <p className="table__first-column">24, сб</p>
      <p className="table__second-column">15</p>
    </div>
    <div className="table__row">
      <p className="table__first-column">25, вс</p>
      <p className="table__second-column">15</p>
    </div>
  </div>
}
export default Table;
