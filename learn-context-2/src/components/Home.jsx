import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Product from "./products";

const Home = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="outer-div">
      {data.map((item) => {
        <Product data={data} />;
      })}
    </div>
  );
};

export default Home;
