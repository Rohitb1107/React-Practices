import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const MyApp = () => {
  const [newAdvice, setNewAdvice] = useState("");

  function generateQoute() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        var advice = res.data.slip.advice;
        setNewAdvice(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>Random qoutes generator</h1>
      <h2>{newAdvice}</h2>
      <button onClick={generateQoute}>Click</button>
    </>
  );
};

export default MyApp;
