import './App.css';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
const apiKey = "26c91fadd6271c3d546828143a878e17";

function InTheaters(props) {
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
        <h2>In Theaters</h2>
        <div className="daily-lists">
          {inTheaters.map((theaterMovie) => (
            <img
            src={`https://image.tmdb.org/t/p/w500/${theaterMovie.poster_path}`}
            alt={theaterMovie.title}
            onClick={() => props.onClick(theaterMovie.id)}
            style={{ width: "75px", height: "110px" }}/>
          ))}
        </div>
      </div>
    );
  }
  
  export default InTheaters;