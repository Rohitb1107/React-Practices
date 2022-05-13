import React, { useEffect } from "react";

const SearchMovie = () => {
  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=17a08660";
  const Search = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    Search("Spiderman");
  }, []);

  return (
    <>
      <h1>Search your movie</h1>
    </>
  );
};

export default SearchMovie;
