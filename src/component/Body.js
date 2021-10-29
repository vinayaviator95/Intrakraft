import React from "react";
import ProductListing from "./ProductListing";
import SideBar from "./SideBar";
import "../Styles/Card.css";
const Body = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <SideBar />
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <div className="row">
            <div className="col-12 my-3">
              <p>
                Home / Brands / Jack & Jones /
                <span className="cataloge">Cataloge</span>
              </p>
            </div>
            <div className="col-12 topbtn-wrapper mb-3">
              <div className="cat-topbtn">
                <div>Men</div>
                <div>
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <div className="cat-topbtn">
                <div>Women</div>
                <div>
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <div className="cat-topbtn">
                <div>Kids</div>
                <div>
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <div className="cat-topbtn">
                <div>New</div>
                <div>
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <div className="clearall-div">
                <div className="clearall">Clear All</div>
              </div>
            </div>
          </div>
          <ProductListing />
        </div>
      </div>
    </div>
  );
};

export default Body;
