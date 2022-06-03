import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Products from "./Products";

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
      {data.map((prod) => {
        return (
          <div className="container" key={prod.id}>
            <Products prod={prod} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;

{
  /* <div className="outer-div">
{data.map((prod) => {
  return (
    <div className="main-div" key={prod.id}>
      <img src={prod.image} alt="products" />
      <div>Title:{prod.title}</div>
      <div>Price:{prod.price}</div>
    </div>
  );
})}
</div> */
}
