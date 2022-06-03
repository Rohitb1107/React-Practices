import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Products = ({ prod, cart, setCart }) => {
  function addItem() {
    setCart([...cart, prod]);
  }

  function removeItem() {
    setCart(cart.filter((c) => c.id !== prod.id));
  }
  return (
    <div className="outer-div">
      <div className="main-div">
        <img src={prod.image} alt="products" />
        <div>Title:{prod.title}</div>
        <div>Price:{prod.price}</div>
        {cart.includes(prod) ? (
          <button onClick={removeItem}>Remove Item</button>
        ) : (
          <button onClick={addItem}>Add item</button>
        )}
      </div>
    </div>
  );
};

export default Products;
