import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <>
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className="logo" onClick={() => gotoHome()}>
          PROPERTY RENTALS
        </div>
        <ul>
          <li>
            <Link to={"/aboutus"}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/villas"}>VILLAS</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ThemeToggle />
          <RxHamburgerMenu
            className="hamburger"
            onClick={() => setNavHeight(!navHeight)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
