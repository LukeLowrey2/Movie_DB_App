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
        // const movieId = 89;
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
  // }, []);


  

  console.log(singleMovie)

  return (

      <div id="movieSingle">
        <div id="title">
          <h3>{singleMovie.original_title}</h3>
          <p>{singleMovie.release_date}</p>
        </div>
        <div id="movieMedia">
          {/* Image of movie poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
            alt={`${singleMovie.original_title} Movie Poster`}
            style={{ width: "20%", height: "20%" }}/>
          {/* Image of movie trailer */}
          {/* <h2>Movie Trailer</h2> */}
          <VideoSingleMovie movieId={fetchParamsId()}/>
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
          <CastSingleMovie movieId={fetchParamsId()}/>
        </div>
      </div>
      
  );
}

export default SingleMovie;