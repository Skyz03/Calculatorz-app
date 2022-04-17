import React from "react";

const Header = () => {
  return (
    <header className="calc__header">
      <h1 className="calc__title">Calc</h1>
      <div className="calc__switch-wrapper">
        <span className="calc__text">Theme</span>
        <div className="calc__switch">
          {/* Input 01 */}
          <label className="calc__label" for="dark-theme">
            1
          </label>
          <input
            className="calc__input"
            type="radio"
            id="dark-theme"
            name="theme switch"
            data-theme-input="dark"
          />
          {/* Input 02 */}
          <label className="calc__label" for="light-theme">
            2
          </label>
          <input
            className="calc__input"
            type="radio"
            id="light-theme"
            name="theme switch"
            data-theme-input="light"
          />
          {/* Input 03 */}
          <label className="calc__label" for="neon-theme">
            3
          </label>
          <input
            className="calc__input"
            type="radio"
            id="neon-theme"
            name="theme switch"
            data-theme-input="neon"
          />
          {/* Input 03 */}
          <label className="calc__label" for="custom-theme">
            4
          </label>
          <input
            className="calc__input"
            type="radio"
            id="custom-theme"
            name="theme switch"
            data-theme-input="custom"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
