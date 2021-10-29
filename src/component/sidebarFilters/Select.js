import React from "react";
import "../../Styles/Sidebar.css";
const Select = () => {
  return (
    <div className="select-wrapper">
      <p className="">Stories</p>
      <select className="">
        <option>Snow White</option>
        <option>Snow Black</option>
        <option>Snow green</option>
      </select>
    </div>
  );
};

export default Select;
