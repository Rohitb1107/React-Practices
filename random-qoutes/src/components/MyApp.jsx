import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const MyApp = () => {
  const [newAdvice, setNewAdvice] = useState("Hello");

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        var advice = res.data.slip.advice;
        console.log(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Random qoutes generator</h1>
      <h2>{newAdvice}</h2>
    </>
  );
};

export default MyApp;
