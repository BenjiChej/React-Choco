import React from "react";
import "./navBar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="https://www.instagram.com/late.chocolates/">Contacto</a>
        <a href="/">Home</a>
        <a href="/React-Choco/Menu">¿Porque LATE?</a>
      </div>
    </nav>
  );
};

export default Navbar;

