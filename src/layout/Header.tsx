import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Link to="/">
        <nav>Home</nav>
      </Link>
      <Link to="about">
        <nav>About</nav>
      </Link>
      <nav>Contact</nav>
    </div>
  );
};

export default Header;
