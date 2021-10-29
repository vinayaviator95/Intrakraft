import React from "react";
import "../../Styles/Sidebar.css";
const StockData = [
  {
    id: "1",
    name: "All",
    type: "checkbox",
  },
  {
    id: "2",
    name: "New",
    type: "checkbox",
  },
  {
    id: "3",
    name: "Old",
    type: "checkbox",
  },
];

const Stock = () => {
  return (
    <form className="stock-wrapper">
      <p className="stock-heading">Stock</p>
      {StockData?.map((item) => {
        return (
          <div className="stock-body">
            <div className="input-div">
              <input
                type={item.type}
                name={item.name}
                className="round-checkbox"
              />
            </div>
            <div className="">
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          </div>
        );
      })}
    </form>
  );
};

export default Stock;
