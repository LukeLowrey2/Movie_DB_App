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

  return (
    <div className="App">
      <header>
        <div>
          <h1>Movie DB Logo Image</h1>
        </div> 
      </header>
      
      <div className="main">
        <div className="left-main">
          <DailyFeature/>
        </div>

        <div className="right-main">
        <SearchMovies/>
        <SingleMovie/>          
        </div>

      </div>
      


    
    </div>
  );
}

export default App;
