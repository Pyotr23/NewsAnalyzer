import React from "react";
import "./table-row.css";

type TableRowProps = {
  day: string,
  count: number,
  modificator?: string,
  widthInPercent: number
}

export const TableRow:React.FC<TableRowProps> = ({ day, count, modificator = "table-row_margin-bottom", widthInPercent }) => {
  const blockClassName = `table-row ${modificator}`;
  const width = `${100 - widthInPercent}%`
  return <div className={ blockClassName }>
    <p className="table-row__first-column">{ day }</p>
    <div className="table-row__second-column">
      { count }
      <div className="table-row__shifter" style={{width: width }}></div>
    </div>
  </div>
}

type HeaderTableRowProps = {
  month: string
}

export const HeaderTableRow:React.FC<HeaderTableRowProps> = ({month}) => {
  const date = `Дата (${ month })`;
  return <div className="table-row">
      <p className="table-row__first-column table-row__header">{ date }</p>
      <p className="table-row__second-column table-row__header">Кол-во упоминаний</p>
  </div>
}

export const ScaleTableRow:React.FC = () => (
  <div className="table-row">
    <p className="table-row__first-column"></p>
    <div className="table-row__second-column table-row__header table-row__digits">
      0
      <p className="table-row__digit">25</p>
      <p className="table-row__digit">50</p>
      <p className="table-row__digit">75</p>
      <p className="table-row__digit">100</p>
    </div>
  </div>
)
