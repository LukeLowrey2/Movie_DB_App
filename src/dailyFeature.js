// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function DailyFeature() {
  const [data, setData] = useState([]);
  return (

      <div id="dailyFreature">
        <div>
          <h1>Today's Featured Movies</h1>
        </div>
        <div>
          <h1>In Theaters</h1>
        </div>
        
      </div>
      
  );
}

export default DailyFeature;