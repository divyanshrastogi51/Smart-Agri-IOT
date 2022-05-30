import React from "react";
import logo from "../logo.png";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <div className="App-slug">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Smart Agriculture</h1>
        </div>
      </header>
    </div>
  );
};
export default Header;
