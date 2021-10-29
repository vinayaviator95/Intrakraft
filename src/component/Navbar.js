import React from "react";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-main">
        <div className="navbar-icon">IntraKraft</div>
        <div className="navbar-list">
          <div className="order">Order</div>
          <div className="brands">Brands</div>
          <div className="connections">Connections</div>
          <div className="icon">
            <div>
              <i class="far fa-bell"></i>
            </div>
            <div>
              <i class="fas fa-cart-plus"></i>
            </div>
          </div>
          <div className="navbar-select">
            {/* <select>
              <option>Welcome Shopper Stop</option>
              <option>shop brand 1</option>
              <option>shop brand 2</option>
            </select> */}
            <img className="nav-right-image"
              src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="image"
            />
            <div >
              <p>Welcome</p>
              <p>Shopper Stop</p>
            </div>
            <i class="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
