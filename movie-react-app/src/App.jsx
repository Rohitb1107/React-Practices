import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchMovie from "./Components/SearchMovie";
// import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <div className="App">
      <SearchMovie />
      {/* <MovieCard /> */}
    </div>
  );
}

export default App;
