// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function singleArtist() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <div className="header">
        <div>
          {/* This will be the logo which will be a link to the home page */}
          <h2>Movie DB Logo Image</h2>
        </div>

        <div>
          <h2>Search Bar Input</h2>
        </div>
      </div>

      <div className="body">
        <div>
          <h1>Artist Name</h1>
        </div>
        <div>
          {/* Image of movie poster */}
          <h2>Artist Image</h2> 
          
          <h3>Artist Info</h3>
        </div>
        <div>
          <h2>Known for</h2>
        </div>
      </div>
      

    </div>
  );
}

export default singleArtist;