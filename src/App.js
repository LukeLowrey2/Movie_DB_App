// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DailyFeature from './DailyFeature';
import SingleMovie from './SingleMovie';
import SingleArtist from './SingleArtist';
import SearchMovies from './SearchMovies';
const apiKey = "26c91fadd6271c3d546828143a878e17";

function App() {
  // const [movieId, setMovieId] = useState("");

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

  // console.log("movie id from params", movieId)

  return (
    <div className="App">
      <div id="header">
        <div>
          <h2>Movie DB Logo Image</h2>
        </div>
        
      </div>
      
      <div className="Main">
        <div>
          <DailyFeature/>
        </div>

        <div>
        <SearchMovies/>
        <SingleMovie/>
          
        </div>

      </div>
      


    
    </div>
  );
}

export default App;
