// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
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
          <h1>Today's Featured Movies</h1>
        </div>
        <div>
          <h1>In Theaters</h1>
        </div>
      </div>
      


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
