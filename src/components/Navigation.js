import React from "react";
import "./Navigation.css";
import logo from "./three.png";

const Navigation = () => {
  return (
    <div>
      <div id="main">
        <div className="imglogo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
