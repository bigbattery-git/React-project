import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [currentWeatherIcon, setCurrentWeatherIcon] = useState('');
  let [currentTemp, setCurrentTemp] = useState(0);

  function setTemp(){
    const APIKEY='b39d013ff126cc4320a01e0d605caea5';
    const lat = 35.871557;
    const lon = 128.601506;
    const units = 'metric';
    const lang = 'kr';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=${units}&lang=${lang}`
    axios.get(URL)
    .then(data => {
      setCurrentWeatherIcon(data.data.weather[0].icon); 
      setCurrentTemp(data.data.main.temp);
      console.log(data.data.weather[0].icon);
    })
    .catch(error => {console.log(error)});
  }

  useEffect(()=>{
    setTemp();
    return() => {
      setCurrentTemp(0);
    }
  },[])

  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + `resources/${currentWeatherIcon}.png`} alt="logo"/>
      <button onClick={() => {setCurrentWeatherIcon('sunny')}}>서니 출력</button>
      <button onClick={() => {setTemp();}}>날씨 정보 출력</button>
      <div>{`현재 대구 온도 : ${currentTemp}`}</div>
    </div>
  );
}

export default App;
