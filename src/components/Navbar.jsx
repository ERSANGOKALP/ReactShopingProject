import React from "react";
import "../style.css/Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="left">
        <span className="language">ENG</span>
        <div className="search">
          <input className="searchInput" placeholder="search"></input>
          <button>Press</button>
        </div>
      </div>
      <div className="center">
        <p className="ersan">Ersan.</p>
      </div>
      <div className="right">
        <a href="">About</a>
        <a href="">Contacts</a>
        <a href="">Info</a>
      </div>
    </div>



  )
}


