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
          <a className="app_link" href="/" rel="noopener noreferrer">
              <img className="logo" src="https://i.imgur.com/293pjpB.png" alt="SlvrSearch"></img>
          </a>
          <SearchMovies/>
      </header>
      
      <div className="main">
       
        <div className="right-main">
          
          <SingleMovie/>          
        </div>

        <div className="left-main">
          <DailyFeature/>
        </div>

      </div>
      


    
    </div>
  );
}

export default App;
