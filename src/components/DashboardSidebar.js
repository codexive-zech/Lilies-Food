import React from "react";
import DashboardSidebarWrapper from "../wrappers/DashboardSidebarWrapper";
import logo from "../images/liliesLogo.png";
import { FaHome, FaPeopleCarry, FaCalendar, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const DashboardSidebar = () => {
  return (
    <DashboardSidebarWrapper>
      <div className="big-sidebar">
        <img src={logo} alt="" className="nav-logo" />
        <ul className="dashboard-links">
          <Link className="dashboard-link" to="/">
            <FaHome size={20} />
            <h3>Dashboard</h3>
          </Link>

          <Link className="dashboard-link" to="#">
            <FaPeopleCarry size={20} />
            <h3>Your Profile</h3>
          </Link>

          <Link className="dashboard-link " to="#">
            <FaCalendar size={20} />
            <h3>Order</h3>
          </Link>

          <Link className="dashboard-link" to="#">
            <FaBookmark size={20} />
            <h3>Your Cart</h3>
          </Link>
        </ul>
      </div>
    </DashboardSidebarWrapper>
  );
};

export default DashboardSidebar;
