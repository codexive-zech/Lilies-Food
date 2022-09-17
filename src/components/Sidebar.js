import React from "react";
import logo from "../images/liliesLogo.png";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/navbarSlice";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();
  return (
    <section className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-head">
        <img src={logo} alt="" className="nav-logo" />
        <button
          className="nav-close-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-links">
        <li className="sidebar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="sidebar-link">
          <Link to="/register">Login</Link>
        </li>
        <li className="sidebar-link">
          <Link to="/register">Sign up</Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
