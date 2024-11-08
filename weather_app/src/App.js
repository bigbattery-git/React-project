import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [currentWeatherIcon, setCurrentWeatherIcon] = useState('');
  let [currentTemp, setCurrentTemp] = useState(0);
  let [currentWeather, setCurrentWeather] = useState('');

  function setTemp(){
    const APIKEY='b39d013ff126cc4320a01e0d605caea5';
    const lat = 35.871557;
    const lon = 128.601506;
    const units = 'metric';
    const lang = 'kr';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=${units}&lang=${lang}`
    axios.get(URL)
    .then(data => {
      setCurrentWeatherIcon(process.env.PUBLIC_URL + `resources/${data.data.weather[0].icon}.png`); 
      setCurrentTemp(data.data.main.temp);
      setCurrentWeather(data.data.weather[0].description);

      console.log(data.data);
    })
    .catch(error => {console.log(error)});
  }

  useEffect(()=>{
    setTemp();
  },[currentWeatherIcon])

  return (
    <div className="App">
      <img src={currentWeatherIcon} alt="logo"/>
      <h1 className='content'>제주도</h1>
      <h2 className='content'>{currentWeather}</h2>
      <h2 className='content'>{`${currentTemp} 도`}</h2>
      <h3 className='content'>미세먼지 매우나쁨</h3>
    </div>
  );
}

export default App;
