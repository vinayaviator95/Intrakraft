import React from "react";
import "../Styles/Card.css";

const Card = ({ item }) => {
  const { heading, mrp, cost, off, costDiscount } = item;

  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1634061837822-d415a2382a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt="img"
        />
      </div>
      <div className="card-bottom">
        <div className="max">
          <div className="card-heading">{heading}</div>
          <div className="card-price">
            <div className="mrp">MRP - {mrp}</div>
            <div className="cost">Cost - {cost}</div>
          </div>
          {item.off && (
            <div className="card-discount">
              <div className="off">{off} OFF</div>
              <div className="cost-discount">Cost - {costDiscount}</div>
            </div>
          )}
        </div>

        <div className="button">
          <button>VIEW</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
