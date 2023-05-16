import './App.css';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
const apiKey = "26c91fadd6271c3d546828143a878e17";

function VideoSingleMovie(props) {
    const [trailer, setTrailer] = useState('');
  
    console.log("This is VideoSingleMovie")

    useEffect(() => {
      const fetchMovieVideos = async () => {
        // const movieId = match.params.id;
        const movieId = props.movieId;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          {
            params: {
              api_key: apiKey,
              language: 'en-US',
            },
          }
        );
        const trailerVideo = response.data.results.find(
            (video) => video.type === 'Trailer'
          );
          if (trailerVideo) {
            setTrailer(trailerVideo.key);
          }
        };
  
      fetchMovieVideos();
    }, []);
    // [match.params.id]);

    console.log(trailer)
  
    return (
        <div>
          {trailer ? (
            <iframe
              className="movie-trailer"
              src={`https://www.youtube.com/embed/${trailer}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <p>No trailer available.</p>
          )}
        </div>
      );
  }
  
  export default VideoSingleMovie;