import React, { useState } from "react";
import FiltersParts from "./FiltersParts";
import "../../Styles/Sidebar.css";

const SidebarFilters = () => {
  const [filterData, setFilterData] = useState([
    {
      id: 1,
      heading: "Collections",
      options: ["Men", "women", "kids", "footwear", "Accessories"],
    },
    {
      id: 2,
      heading: "Categories",
      options: [
        "all collections",
        "dresses",
        "jumpsuites",
        "wimter wear",
        "tops",
      ],
    },
    {
      id: 3,
      heading: "Occasion",
      options: ["all collections", "casual", "formal", "party"],
    },
  ]);
  return (
    <div className="filters">
      {filterData.map((data) => {
        return <FiltersParts data={data} type="checkbox" key={data.id} />;
      })}
    </div>
  );
};

export default SidebarFilters;
