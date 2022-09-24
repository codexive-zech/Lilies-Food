import React from "react";
import {
  FaHome,
  FaPeopleCarry,
  FaCalendar,
  FaBookmark,
  FaTimes,
} from "react-icons/fa";
import logo from "../images/liliesLogo.png";
import { Link } from "react-router-dom";
import SmallDashboardSidebarWrapper from "../wrappers/SmallDashboardSidebarWrapper";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/navbar/navbarSlice";

const SmallDashboardSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();
  return (
    <SmallDashboardSidebarWrapper>
      {/* add class show to div later */}
      <section
        className={isSidebarOpen ? "small-sidebar show" : "small-sidebar"}
      >
        <button
          className="dashboard-close-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaTimes />
        </button>
        <img src={logo} alt="" className="nav-logo" />
        <ul className="dashboard-links">
          <Link
            className="dashboard-link"
            to="/"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaHome size={20} />
            <h3>Dashboard</h3>
          </Link>

          <Link
            className="dashboard-link"
            to="/profile"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaPeopleCarry size={20} />
            <h3>Your Profile</h3>
          </Link>

          <Link
            className="dashboard-link "
            to="/order"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaCalendar size={20} />
            <h3>Order</h3>
            <span className="order">6</span>
          </Link>

          <Link
            className="dashboard-link"
            to="/cart"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaBookmark size={20} />
            <h3>Your Cart</h3>
            <span className="cart">6</span>
          </Link>
        </ul>
      </section>
    </SmallDashboardSidebarWrapper>
  );
};

export default SmallDashboardSidebar;