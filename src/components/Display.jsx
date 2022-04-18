import React from "react";
import logo from "../image/gear.png";

const Display = () => {
  return (
    <div className="calc__display">
      <button className="calc__display-settings">
        <img src={logo} alt="gear" className="calc__img" />
      </button>
      <p classsName="calc_display-value--previous" data-preious-value=""></p>
      <p classsName="calc_display-value--current" data-preious-value=""></p>
    </div>
  );
};

export default Display;
