import React from 'react';
import Header from "./components/header/header";
import Loading from "./components/loading/loading";
import NoResult from "./components/no-result/no-result";
import Cards from "./components/cards/cards";

const App = () => (
  <React.StrictMode>
    <Header />
    <Loading />
    <NoResult />
    <Cards />
  </React.StrictMode>
);

export default App;
