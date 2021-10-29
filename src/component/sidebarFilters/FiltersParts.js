import React from "react";
import "../../Styles/Sidebar.css";

const FiltersParts = ({ data, type }) => {
  return (
    <div className="filter-div">
      <p>{data?.heading}</p>
      <div className="filter-options">
        <ul>
          {data?.options.map((option, index) => {
            return (
              <li key={`${option}_${data.heading}_${index}`}>
                <label htmlFor={`${option}_${data.heading}_${index}`}>
                  <input
                    type={type}
                    name={`${option}_${data.heading}_${index}`}
                    id={`${option}_${data.heading}_${index}`}
                  />
                  {option}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FiltersParts;
