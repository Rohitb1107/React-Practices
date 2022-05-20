import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <>
      <div className="news-div container my-3">
        <div className="row pb-3">
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>

        <div className="row pb-3">
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>

        <div className="row pb-3">
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
