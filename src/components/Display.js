import React from "react";

const Display = () => {
  return (
    <div className="calc__display">
      <button className="calc__display-settings">
        <i className="calc__display-settings i-cog"></i>
      </button>
      <p classsName="calc_display-value--previous" data-preious-value=""></p>
      <p classsName="calc_display-value--current" data-preious-value=""></p>
    </div>
  );
};

export default Display;
