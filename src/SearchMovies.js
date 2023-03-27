import './App.css';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
const apiKey = "26c91fadd6271c3d546828143a878e17";

function SearchMovies() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    useEffect(() => {
      const fetchMovies = async () => {
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/multi',
          {
            params: {
              api_key: apiKey,
              query: searchTerm,
            },
          }
        );
        setMovies(response.data.results);
      };
  
      if (searchTerm.length > 0) {
        fetchMovies();
      }
    }, [searchTerm]);
  
    return (
      <div>
        <input type="text" placeholder="Search Movies" value={searchTerm} onChange={handleChange} />
        <ul>
          {movies.slice(0,5).map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default SearchMovies;