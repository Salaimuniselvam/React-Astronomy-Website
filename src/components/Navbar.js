import React from "react";

function Navbar({ state }) {
  return (
    <div className="Navbar">
      <div className="icons">
        <img src={require("../data/astronomy.png").default} alt="astronomy" />
        <a href="/">Astrophilia</a>
      </div>
      <div className="Nav-links">
        <a href="/signin">Login</a>
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
}

export default Navbar;
