// import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import VideoSingleMovie from './VideoSingleMovie';
import CastSingleMovie from './CastSingleMovie';
const apiKey = "26c91fadd6271c3d546828143a878e17";


function SingleMovie() {
  const [movieId, setMovieId] = useState("");
  const [singleMovie, setSingleMovie] = useState([]);

  function fetchParamsId(){
    console.log(window.location.search)
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams)
    const idParam = searchParams.get('param');
    console.log(idParam)
    if (idParam) {
      console.log("fetchParams set to", idParam)
      return idParam
    }
  }

  console.log("movie id from params", movieId)
  
    useEffect(() => {
      const fetchMovieDetails = async (id) => {
        
        const movieId = id;
        
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
  
      fetchMovieDetails(fetchParamsId());
    }, []);
  


  

  console.log("single movie", singleMovie)

  return (

      <div className="movie_single">
        {singleMovie.length === 0 ? (
            <br></br>
            
          ) : (

        <div className="movie-title">
          <h2>{singleMovie.original_title}</h2>
          
          <p>{singleMovie.release_date}</p>
        </div>
          )}


        <div >
          {singleMovie.length === 0 ? (
            <br></br>
            
          ) : (
            <div className="movie-media">
            <img
            src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
            alt={`Movie Poster`}
            style={{ width: "20%", height: "20%" }}/>
          <VideoSingleMovie movieId={fetchParamsId()}/>
          </div>
          )}
        </div>

        {singleMovie.length === 0 ? (
            <br></br>
            
          ) : (
        <div className="movie-info">
          <p>{singleMovie.overview}</p>
          <br></br>
          <CastSingleMovie movieId={fetchParamsId()}/>
        </div>
          )}
      </div>
      
  );
}

export default SingleMovie;