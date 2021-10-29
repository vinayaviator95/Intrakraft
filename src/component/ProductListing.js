import React from "react";
import Card from "./Card";
const data = [
  {
    id: "1",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1249",
    cost: "995",
    off: "30%",
    costDiscount: "455",
  },
  {
    id: "2",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1000",
    cost: "995",
    off: "30%",
    costDiscount: "455",
  },
  {
    id: "3",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1000",
    cost: "995",
    off: "",
    costDiscount: "",
  },
  {
    id: "4",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1000",
    cost: "661",
    off: "",
    costDiscount: "",
  },
  {
    id: "5",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1000",
    cost: "661",
    off: "30%",
    costDiscount: "455",
  },
  {
    id: "6",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1249",
    cost: "995",
    off: "",
    costDiscount: "",
  },
  {
    id: "7",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1000",
    cost: "661",
    off: "",
    costDiscount: "",
  },
  {
    id: "8",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1249",
    cost: "995",
    off: "30%",
    costDiscount: "455",
  },
  {
    id: "9",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1000",
    cost: "661",
    off: "",
    costDiscount: "",
  },
  {
    id: "10",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1000",
    cost: "661",
    off: "",
    costDiscount: "",
  },
  {
    id: "11",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1000",
    cost: "661",
    off: "",
    costDiscount: "",
  },
  {
    id: "12",
    heading: "Lace Insert Velveteen Black Dress",
    mrp: "1249",
    cost: "995",
    off: "30%",
    costDiscount: "455",
  },
];
const ProductListing = () => {
  return (
    <div className="productListing">
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
