// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
import DailyFeature from './DailyFeature';
import singleMovie from './SingleMovie';
import singleArtist from './SingleArtist';

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <div id="header">
        <div>
          {/* This will be the logo which will be a link to the home page */}
          <h2>Movie DB Logo Image</h2>
        </div>

        <div>
          <h2>Search Bar Input</h2>
        </div>
      </div>

      <DailyFeature />

      
      


    
    </div>
  );
}

export default App;
