// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import React, {useState, useEffect} from 'react';
import DailyFeature from './DailyFeature';
import SingleMovie from './SingleMovie';
import SingleArtist from './SingleArtist';
import SearchMovies from './SearchMovies';
const apiKey = "26c91fadd6271c3d546828143a878e17";

function App() {
  // const [movieId, setMovieId] = useState("");

  // useEffect(() => {
  //   console.log(window.location.search)
  //   const searchParams = new URLSearchParams(window.location.search);
  //   console.log(searchParams)
  //   const idParam = searchParams.get('param');
  //   console.log(idParam)
  //   if (idParam) {
  //     setMovieId(idParam);
  //   }
  // }, []);

  // console.log("movie id from params", movieId)

  return (
    <div className="App">
      <div id="header">
        <div>
          {/* This will be the logo which will be a link to the home page */}
          <h2>Movie DB Logo Image</h2>
        </div>

        <SearchMovies/>
      </div>

      <DailyFeature  />

      <SingleMovie 
      // movieId={movieId} 
      />
      


    
    </div>
  );
}

export default App;
