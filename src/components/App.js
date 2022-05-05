import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from './Section';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [error, setError] = useState(null); 

  let key = 'OXPRETygmiit4mNjhPc4GKdwVMUkX5oJw2obRy2b';
  let date = new Date();
  let todayArr = date.toJSON().split('T')[0].split('-');
  let today = todayArr.join('-');
  let days = ['Sunday','Monday','Tuesday','Wednseday','Thursday','Friday','Saturday'];
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let nextDayName = days[date.getDay()+1];
  let monthName = months[date.getMonth()];

  function nextDay() {
    let year = todayArr[0];
    let month = todayArr[1];
    let day = todayArr[2];
    let endDay = null;
    let daysInMonth = new Date(year, month, 0).getDate();
    if (Number(day) + 1 <= daysInMonth) {
      if(Number(day) + 1 < 10) {
        endDay = '0' + (Number(day)+1);
      } else {
        endDay = (Number(day) + 1).toString();
      }
    } else if (Number(month) < 12){
      month = (Number(month)+1).toString();
      endDay = '01';
    } else {
      year = (Number(year)+1).toString();
      month = '01';
      endDay = '01';
    }
    return year + '-' + month + '-' + endDay;
  }
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed/?start_date=${today}&end_date=${nextDay()}&api_key=${key}`)
      .then(
        (response) => {
          setisLoaded(true);
          setPosts(response.data.near_earth_objects[`${nextDay()}`]);
        },  
        (error) => {
          setisLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Something went wrong. Error: {error.message} </div>;
  } 
  else if (!isLoaded) {
    return (
      <div className="loading">
        <p>Getting Data From Nasa...</p>
      </div>
      );
    } 
  else {
    return (
      <React.Fragment>
        <div className="App">
          <h2 className='header'>
            {nextDayName}{' '}{nextDay().split('-')[2]}-{monthName} there will be <strong style={{color: 'orange'}}>{posts.length}</strong> near misses!!!
          </h2>
          {posts
            .sort(a => a.is_potentially_hazardous_asteroid ? -1 : 1)
            .map(post => <Section key={post.id} {...post} />)}
        </div>
        <footer className="footer">
          <p>by Ghazaleh H.</p>
          <p>Brought to you by NASA&apos;s Asteroids-NeoWs(Near Earth Object Web Service)</p>
        </footer>
      </React.Fragment>
    );
  }
}


export default App;
