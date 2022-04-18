import React from "react";

const Header = () => {
  return (
    <header className="calc__header">
      <h1 className="calc__title">calc</h1>
      <div className="calc__switch-wrapper">
        <span className="calc__text">Theme</span>
        <div className="calc__switch">
          <label
            for="dark-theme"
            className="calc__label"
            aria-label="Toggle dark theme"
          >
            1
          </label>
          <input
            type="radio"
            name="theme switch"
            id="dark-theme"
            className="calc__input"
            data-theme-input="dark"
          />

          <label
            for="light-theme"
            className="calc__label"
            aria-label="Toggle light theme"
          >
            2
          </label>
          <input
            type="radio"
            name="theme switch"
            id="light-theme"
            className="calc__input"
            data-theme-input="light"
          />

          <label
            for="neon-theme"
            className="calc__label calc__label-toggle"
            aria-label="Toggle neon theme"
          >
            3
          </label>
          <input
            type="radio"
            name="theme switch"
            id="neon-theme"
            className="calc__input"
            data-theme-input="neon"
          />

          <label
            for="custom-theme"
            className="calc__label"
            aria-label="Toggle custom theme"
          >
            C
          </label>
          <input
            type="radio"
            name="theme switch"
            id="custom-theme"
            className="calc__input"
            data-theme-input="custom"
          />
          <span className="calc__toggle"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
