import React, { useState, useEffect } from "react";
import Section from './Section';

function App() {
  
  let key = 'OXPRETygmiit4mNjhPc4GKdwVMUkX5oJw2obRy2b';

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getUTCMonth() + 1;
  month = month < 10 ? `0${month}`: month;
  let day = date.getDate();
  let endDay = day + 1;
  day = day < 10 ? `0${day}` : day;
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch(`http://api.nasa.gov/neo/rest/v1/feed/?start_date=${year}-${month}-${day}&end_date=${year}-${month}-${endDay}&api_key=${key}`)
      .then(response => response.json())
      .then(json => {
        setData(json.near_earth_objects[`${year}-${month}-${day}`]);
      });
  }, []);

    console.log('data: ', data);
  

    return (
      <div className="App">
         <h2>
          {date.toLocaleString('en-us', {weekday:'long'})} {day+1}-{date.toLocaleString('en-us', {month: 'short'})}{' '}
          there will be <strong style={{color: 'orange'}}>{data.length}</strong> near misses
        </h2>
        {data.map((astro) => (<Section key={astro.id} {...astro} />))}
      </div>
    );
  }


export default App;
