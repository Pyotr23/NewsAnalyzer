import React from "react";
import "./daily.css";
import Title from "../title/title";
import Table from "../table/table";

const Daily = () => (
  <section className="daily">
    <Title title="Аналитика по дням" modificatorClassName="title_place_daily"/>
    <Table />
  </section>
)

export default Daily;
