import React from "react";
import Header from "./Header";
import Display from "./Display";
// import Footer from "./Footer";

const Calc = () => {
  return (
    <main data-theme="light" className="component-wrapper">
      <div className="calc">
        <div className="calc__container">
          <Header />
          <Display />
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
};

export default Calc;
