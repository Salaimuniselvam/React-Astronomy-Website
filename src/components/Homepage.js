import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="Homepage">
        <div className="left">
          <h1>Astronomy</h1>
          <p>So Much Universe So Little Time..</p>
          <Link to="/signin">
            <button>Explore</button>
          </Link>
        </div>
        <div className="right">
          <img
            src={require("../data/illustration.svg").default}
            alt="astronomy"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Homepage;
