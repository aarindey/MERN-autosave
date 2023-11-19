// Header.js
import React from "react";
import { Link } from "react-router-dom";

const headerStyles = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoStyles = {
  fontSize: "1.5rem",
  textDecoration: "none",
  color: "#fff",
};

const navStyles = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
};

const linkStyles = {
  textDecoration: "none",
  color: "#fff",
  margin: "0 10px",
};

const Header = () => {
  return (
    <header style={headerStyles}>
      <Link to="/" style={logoStyles}>
        MERN Auto Save
      </Link>
      <nav>
        <ul style={navStyles}>
          <li>
            <Link to="/" style={linkStyles}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" style={linkStyles}>
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
