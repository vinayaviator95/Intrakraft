import React from "react";
import "../Styles/Sidebar.css";
import SidebarFilters from "./sidebarFilters/SidebarFilters";
import Select from "./sidebarFilters/Select";
import Stock from "./sidebarFilters/Stock";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-img">
        <div className="sidebar-banner-details">
          <h1>Jack & Jones</h1>
          <p>Jeans Intelligence</p>
        </div>
        <div className="sidebar-banner-footer">Nike, Inc</div>
      </div>
      {/* other will come undre this*/}
      <SidebarFilters />
      <Select />
      <Stock />
    </div>
  );
};

export default SideBar;
