import React, { useState, useEffect } from "react";

const SearchMovie = () => {
  const [movie, setMovie] = useState([]);
  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=17a08660";

  const Search = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    const movies = data.Search;
    console.log(movies);
    setMovie(movies);
  };

  useEffect(() => {
    Search("Spiderman");
  }, []);

  return (
    <>
      <h1>MoviesLand</h1>
      <div className="search"></div>
      {movie.map((e) => {
        <p>{e.Title}</p>;
      })}
    </>
  );
};

export default SearchMovie;
