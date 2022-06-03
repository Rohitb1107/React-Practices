import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Products = ({ prod }) => {
  return (
    <div className="outer-div">
      <div className="main-div">
        <img src={prod.image} alt="products" />
        <div>Title:{prod.title}</div>
        <div>Price:{prod.price}</div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Products;
