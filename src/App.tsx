import React from 'react';
import Footer from "./components/footer/footer";

const App:React.FC = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default App;
