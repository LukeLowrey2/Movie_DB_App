// import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import InTheaters from './InTheaters';
const apiKey = "26c91fadd6271c3d546828143a878e17";


function DailyFeature() {
  // const [data, setData] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setFeaturedMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  const imageClick = (id) => {
    console.log("hello from imageClick")
    const newParamValue = id; // Replace this with the new parameter value
    window.location.search = `?param=${newParamValue}`;
    console.log("Movie Id from imageClick", id, newParamValue)
  };
  
  
  console.log(featuredMovies)
  

  return (

      <div id="dailyFreature">
        <div className="trending">
          <h2>Today's Trending Movies</h2>
          <div className="daily-lists">
            {featuredMovies.slice(0, 19).map((movie) => (
            <img
            className="daily-images"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            onClick={() => imageClick(movie.id)}
            />
      ))}
          </div>
        </div>
        <div>
        <InTheaters onClick={imageClick}/>
        </div>
      </div>

      
      
  );
}

export default DailyFeature;