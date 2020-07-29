import React from "react";
import "./header-wrapper.css";
import HomeHeader from "../header/home-header";
import Search from "../search/search";

const HeaderWrapper = () => (
  <div className="header-wrapper">
    <HomeHeader />
    <Search />
  </div>
);

export default HeaderWrapper;
