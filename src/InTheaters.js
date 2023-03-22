import './App.css';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
const apiKey = "26c91fadd6271c3d546828143a878e17";

function InTheaters() {
    const [inTheaters, setInTheaters] = useState([]);
  
    useEffect(() => {
      const fetchInTheatersMovies = async () => {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/now_playing',
          {
            params: {
              api_key: apiKey,
              language: 'en-US',
              page: 1,
            },
          }
        );
        setInTheaters(response.data.results);
      };
  
      fetchInTheatersMovies();
    }, []);

    console.log(inTheaters)
  
    return (
      <div>
        <h1>In Theaters</h1>
        <ul>
          {inTheaters.map((theaterMovie) => (
            <img
            src={`https://image.tmdb.org/t/p/w500/${theaterMovie.poster_path}`}
            alt={theaterMovie.title}
            style={{ width: "10%", height: "10%" }}/>
          ))}
        </ul>
      </div>
    );
  }
  
  export default InTheaters;