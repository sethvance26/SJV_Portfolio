import React from "react";
import logo from "../assets/logo.svg";


const Navbar = () => {

  
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
        <a href="https://www.google.com/">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <a>
          <i class="bi bi-list" style={{ fontSize: 40 }}></i>
        </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar