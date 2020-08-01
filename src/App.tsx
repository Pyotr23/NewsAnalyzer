import React from 'react';
import Loading from "./components/loading/loading";
import NoResult from "./components/no-result/no-result";
import Cards from "./components/cards/cards";
import Author from "./components/author/author";
import Footer from "./components/footer/footer";

const App:React.FC = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default App;
