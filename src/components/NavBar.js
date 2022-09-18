import React from "react";
import logo from "../images/liliesLogo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/navbarSlice";

const NavBarSection = () => {
  const dispatch = useDispatch();
  return (
    <section className="section-center">
      <nav className="nav-center">
        <div className="navbar">
          <img src={logo} alt="" className="nav-logo" />
          <button className="nav-btn" onClick={() => dispatch(toggleSidebar())}>
            <FaBars />
          </button>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Login</Link>
            </li>
            <li>
              <Link to="/register" className="special">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default NavBarSection;
