// import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';
import React, {useState, useEffect} from 'react';
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
  
  console.log(featuredMovies)

  return (

      <div id="dailyFreature">
        <div>
          <h1>Today's Featured Movies</h1>
          <ul>
            {featuredMovies.map((movie) => (
            <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "10%", height: "10%" }}/>
      ))}
    </ul>
        </div>
        <div>
          <h1>In Theaters</h1>
        </div>
        
      </div>
      
  );
}

export default DailyFeature;