import React, { useState, useEffect } from "react";
import "../App.css";
import MovieCard from "./MovieCard";

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [searchM, setSearchM] = useState("");

  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=17a08660";

  const Search = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    Search("Avengers");
  }, []);

  return (
    <>
      <div className="search">
        <div className="heading">MoviesLand</div>
        <input
          type="text"
          placeholder="Search any movie"
          value={searchM}
          onChange={(e) => {
            setSearchM(e.target.value);
          }}
        />
        <button onClick={() => Search(searchM)}>Search</button>
      </div>

      {movies.map((e) => {
        return (
          <div className="movie-card">
            <img src={e.Poster} alt="" />
            <div>{e.Title}</div>
            <div>{e.Year}</div>
          </div>
        );
      })}
    </>
  );
};

export default SearchMovie;
