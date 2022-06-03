import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Product = (props) => {
  return (
    <div className="outer-div">
      <div className="main-div" key={props.data.id}>
        <img src={props.data.image} alt="product" />
        <div>Title:{props.data.title}</div>
        <div>Price:{props.data.price}</div>
      </div>
    </div>
  );
};

export default Product;
