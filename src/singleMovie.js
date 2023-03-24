// import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import VideoSingleMovie from './VideoSingleMovie';
import CastSingleMovie from './CastSingleMovie';
const apiKey = "26c91fadd6271c3d546828143a878e17";


function SingleMovie() {
  const [singleMovie, setSingleMovie] = useState([]);
  
    useEffect(() => {
      const fetchMovieDetails = async () => {
        // const movieId = match.params.id;
        const movieId = 89;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: apiKey,
              language: 'en-US',
            },
          }
        );
        setSingleMovie(response.data);
      };
  
      fetchMovieDetails();
    // }, [match.params.id]);
  }, []);


  

  console.log(singleMovie)

  return (

      <div id="movieSingle">
        <div id="title">
          <h3>{singleMovie.original_title}</h3>
          <p>{singleMovie.release_date.slice(0,4)}</p>
        </div>
        <div id="movieMedia">
          {/* Image of movie poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
            alt={`${singleMovie.original_title} Movie Poster`}
            style={{ width: "20%", height: "20%" }}/>
          {/* Image of movie trailer */}
          {/* <h2>Movie Trailer</h2> */}
          <VideoSingleMovie/>
        </div>

        <div id="movieInfo">

          {/* <p>Genre</p> */}
          <br></br>
          <p>{singleMovie.overview}</p>
          <br></br>
          {/* <h3>Director</h3> */}
          <br></br>
          {/* <h3>Writer</h3> */}
          <br></br>
          <CastSingleMovie/>
        </div>
      </div>
      
  );
}

export default SingleMovie;