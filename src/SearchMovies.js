import './App.css';
import fetch from 'isomorphic-fetch';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
const apiKey = "26c91fadd6271c3d546828143a878e17";

function SearchMovies() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);
  
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
        setSearchMovies(response.data.results);
      };
  
      if (searchTerm.length > 0) {
        fetchMovies();
      }
    }, [searchTerm]);

    console.log("Movies from search", searchMovies)

    const searchClick = (id) => {
      console.log("hello from imageClick")
      const newParamValue = id; // Replace this with the new parameter value
      window.location.search = `?param=${newParamValue}`;
      console.log("Movie Id from imageClick", id, newParamValue)
    };
  
    return (
      <div className="search">
        <h1>Movie Search</h1>
        <input type="text" placeholder="Search Movies" value={searchTerm} onChange={handleChange} />
        <div className="search_options">
          {searchMovies.slice(0,5).map((searchMovie) => (
            <p  style={{ cursor: "default" }} key={searchMovie.id} onClick={() => searchClick(searchMovie.id)}>{searchMovie.title}</p>
          ))}
        </div>
      </div>
    );
  }
  
  export default SearchMovies;