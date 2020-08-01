import React from "react";
import HeaderWrapper from "../header-wrapper/header-wrapper";
import Cards from "../cards/cards";
import Author from "../author/author";
import Loading from "../loading/loading";
import NoResult from "../no-result/no-result";

const Home = () => (
  <>
    <HeaderWrapper />
    <Loading />
    <NoResult />
    <Cards />
    <Author />
  </>
)

export default Home;
