// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function singleMovie() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <div className="header">
        <div>
          {/* This will be the logo which will be a link to the home page */}
          <h2>Movie DB Logo Image</h2>
        </div>

        <div>
          <h2>Search Bar Input</h2>
        </div>
      </div>

      <div className="body">
        <div>
          <h1>Movie Title</h1>
          <h2>Year</h2>
        </div>
        <div className="movieMedia">
          {/* Image of movie poster */}
          <h2>Movie Poster</h2> 
          {/* Image of movie trailer */}
          <h2>Movie Trailer</h2>
        </div>
        <div className="movieInfo">
          <h3>Genre</h3>
          <br></br>
          <h3>About</h3>
          <br></br>
          <h3>Director</h3>
          <br></br>
          <h3>Writer</h3>
          <br></br>
          <h3>Cast</h3>
        </div>
      </div>
      

    </div>
  );
}

export default singleMovie;