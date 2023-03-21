// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function SingleMovie() {
  const [data, setData] = useState([]);
  return (

      <div id="movieSingle">
        <div id="title">
          <h1>Movie Title</h1>
          <h2>Year</h2>
        </div>
        <div id="movieMedia">
          {/* Image of movie poster */}
          <h2>Movie Poster</h2> 
          {/* Image of movie trailer */}
          <h2>Movie Trailer</h2>
        </div>
        <div id="movieInfo">
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
      
  );
}

export default SingleMovie;