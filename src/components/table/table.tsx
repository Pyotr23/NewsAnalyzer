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
      <p className="table__first-column"></p>
      <div className="table__second-column table__header table__digits">
        0
        <p className="table__digit">25</p>
        <p className="table__digit">50</p>
        <p className="table__digit">75</p>
        <p className="table__digit">100</p>
      </div>
    </div>
    <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">19, пн</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div>
    <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">20, вт</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div>
    <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">21, ср</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div>
    <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">22, чт</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div>
    <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">23, пт</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div>
    <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">24, сб</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div>
    <div className="table__row table__row_margin-bottom_last">
      <p className="table__first-column">25, вс</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div>
    <div className="table__row">
      <p className="table__first-column"></p>
      <div className="table__second-column table__header table__digits">
        0
        <p className="table__digit">25</p>
        <p className="table__digit">50</p>
        <p className="table__digit">75</p>
        <p className="table__digit">100</p>
      </div>
    </div>
  </div>
}
export default Table;
