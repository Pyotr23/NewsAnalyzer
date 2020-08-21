import React from "react";
import "./table.css";
import { HeaderTableRow, ScaleTableRow, TableRow } from "../table-row/TableRow";

const Table = () => {

  return <div className="table">
    {/* <div className="table__row">
      <p className="table__first-column table__header">Дата (август)</p>
      <p className="table__second-column table__header">Кол-во упоминаний</p>
    </div> */}
    <HeaderTableRow month="август"/>
    <div className="table__line"></div>
    {/* <div className="table__row">
      <p className="table__first-column"></p>
      <div className="table__second-column table__header table__digits">
        0
        <p className="table__digit">25</p>
        <p className="table__digit">50</p>
        <p className="table__digit">75</p>
        <p className="table__digit">100</p>
      </div>
    </div> */}
    <ScaleTableRow />
    {/* <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">19, пн</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div> */}
    <TableRow day="19, пн" count={ 15 } widthInPercent={10}/>
    {/* <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">20, вт</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div> */}
    <TableRow day="20, вт" count={ 15 } widthInPercent={20}/>
    {/* <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">21, ср</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div> */}
    <TableRow day="21, ср" count={ 15 } widthInPercent={30}/>
    {/* <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">22, чт</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div> */}
    <TableRow day="22, чт" count={ 15 } widthInPercent={40}/>
    {/* <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">23, пт</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div> */}
    <TableRow day="23, пт" count={ 15 } widthInPercent={50}/>
    {/* <div className="table__row table__row_margin-bottom">
      <p className="table__first-column">24, сб</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div> */}
    <TableRow day="24, сб" count={ 15 } widthInPercent={60} />
    {/* <div className="table__row table__row_margin-bottom_last">
      <p className="table__first-column">25, вс</p>
      <div className="table__second-column">
        15
        <div className="table__shifter"></div>
      </div>
    </div> */}
    <TableRow day="25, вс" count={ 15 } widthInPercent={70} modificator="table-row_margin-bottom_last"/>
    {/* <div className="table__row">
      <p className="table__first-column"></p>
      <div className="table__second-column table__header table__digits">
        0
        <p className="table__digit">25</p>
        <p className="table__digit">50</p>
        <p className="table__digit">75</p>
        <p className="table__digit">100</p>
      </div>
    </div> */}
    <ScaleTableRow />
  </div>
}
export default Table;
