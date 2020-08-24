import React, { Component } from "react";
import "./table.css";
import { HeaderTableRow, ScaleTableRow, TableRow } from "../table-row/TableRow";
import { load } from "redux-localstorage-simple";
import { RUSSIAN_MONTH_NAMES, DAYS_AGO_COUNT, RUSSIAN_DAY_OF_WEEK_NAMES } from "../../ts/constants";
import { INewsState } from "../../ts/reducers/news";
import { IArticle, ITableRow } from "../../ts/types";

class Table extends Component{
  private articles: IArticle[];
  private rows: ITableRow[] = new Array<ITableRow>();

  constructor(props: any){
    super(props);
    const savedData: any = load({ namespace: "home" });
    const { articles } = savedData.news as INewsState;
    this.articles = articles;
  }

  private getRussianMonth = (): string => {
    const monthes = this.articles.map(a => new Date(a.publishedAt).getMonth());
    const minMonth = Math.min(...monthes);
    return RUSSIAN_MONTH_NAMES[minMonth];
  }

  private getRowData = (): void => {
    this.createRows();
    this.fillCount();
    this.fillPercent();
  }

  private createRows = (): void => {
    console.log(new Date().getDate());
    for (let i = DAYS_AGO_COUNT; i >= 0; i--){
      const dateTime = new Date();
      dateTime.setDate(dateTime.getDate() - i);
      const dayNumber = dateTime.getDate();
      const day = `${dayNumber}, ${RUSSIAN_DAY_OF_WEEK_NAMES[dateTime.getDay()]}`;
      this.rows.push({ dayNumber, day, count: 0, percent: 0 });
    }
  }

  private fillCount() {
    for (let i = 0, j = this.rows.length - 1; i < this.articles.length; ){
      if (new Date(this.articles[i].publishedAt).getDate() === this.rows[j].dayNumber){
        this.rows[j].count++;
        i++;
      }
      else
        j--;
    }
  }

  private fillPercent() {
    this.rows.forEach(row => row.percent = 100 / this.articles.length * row.count);
  }

  // componentDidMount(){
  //   this.getRowData();
  // }

  render(){
    this.getRowData();
    const month = this.getRussianMonth();
    return <div className="table">
      <HeaderTableRow month={ month }/>
      <div className="table__line"></div>
      <ScaleTableRow />
      {
        [...this.rows].map(({ day, count, percent }, index) => (
          <TableRow key={ index } day={ day } count={ count } widthInPercent={ percent } modificator={index === this.rows.length - 1 ? "table-row_margin-bottom_last" : undefined}/>
        ))
      }
      {/* <TableRow day="19, пн" count={ 15 } widthInPercent={10}/>
      <TableRow day="20, вт" count={ 15 } widthInPercent={20}/>
      <TableRow day="21, ср" count={ 15 } widthInPercent={30}/>
      <TableRow day="22, чт" count={ 15 } widthInPercent={40}/>
      <TableRow day="23, пт" count={ 15 } widthInPercent={50}/>
      <TableRow day="24, сб" count={ 15 } widthInPercent={60} />
      <TableRow day="25, вс" count={ 15 } widthInPercent={70} modificator=/> */}
      <ScaleTableRow />
    </div>
  }
}

export default Table;
