import './App.css';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
const apiKey = "26c91fadd6271c3d546828143a878e17";

function CastSingleMovie(props) {
    const [cast, setCast] = useState([]);
    const [director, setDirector] = useState('');
    const [writer, setWriter] = useState('');
  
    useEffect(() => {
      const fetchCastSigleMovie = async () => {
        // const movieId = match.params.id;
        const movieId = props.movieId;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );
        setCast(response.data.cast);

        const directorData = response.data.crew.find(
          (member) => member.job === 'Director'
        );
        setDirector(directorData.name);

        const writerData = response.data.crew.find(
          (member) => member.job === 'Screenplay' || member.job === 'Writer'
        );
        setWriter(writerData.name);
      };
  
      fetchCastSigleMovie();
    }, []);
    // [match.params.id]);

    console.log(cast)
    console.log('Director -', director)
    console.log('Writer -', writer)
  
    return (
      <div>
        <h3>Movie Credits</h3>
        <p>Director - {director}</p>
        <p>Writer - {writer}</p>
        <div>
          {cast.slice(0,10).map((castMember) => (
            <p key={castMember.id}>
              {/* <img
                src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                alt={castMember.name}
              /> */}
              {castMember.character} - {castMember.name}
            </p>
          ))}
        </div>
      </div>
    );
  }
  
  export default CastSingleMovie;