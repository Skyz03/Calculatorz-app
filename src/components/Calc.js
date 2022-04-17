import React from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import Btn from "./components/Btn";
import Footer from "./components/Footer";

const Calc = () => {
  return (
    <main className="component-wrapper">
      <Header />
      <Display />
      <Btn />
      <Footer />
    </main>
  );
};

export default Calc;
