import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  <nav style={{ marginBottom: 50 , backgroundColor: 'GhostWhite'}} className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" style={{fontFamily: 'Mogra'}}to="/">NYT React App </Link>
      </div>
      <ul className="nav navbar-nav pull-left">
        <li className={location.pathname === "/"}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/favorites"}>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
