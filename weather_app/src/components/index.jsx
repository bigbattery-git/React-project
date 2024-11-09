import styles from '../css/index.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PLACE_DATAS from '../datas/places';

function Index(props){
  let [currentState, setCurrentState] = useState(0);
	let [temp, setTemp] = useState(0);
	let [weatherName, setWeatherName] = useState('');
	let [name, setName] = useState('');
	let [weatherIcon, setWeatherIcon] = useState('');

  function getWeather(name, lat, lon){
    const APIKEY='b39d013ff126cc4320a01e0d605caea5';
    const units = 'metric';
    const lang = 'kr';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=${units}&lang=${lang}`
    axios.get(URL)
    .then(data => {
			setTemp(data.data.main.temp);
			setWeatherName(data.data.weather[0].description);
			setName(name);
			setWeatherIcon(data.data.weather[0].icon);
    })
    .catch(error => {console.log(error)});
  }

  function formatCurrentState(num){

    if(currentState + num < 0){
      setCurrentState(PLACE_DATAS.length-1);
    }
    else if(currentState + num >= PLACE_DATAS.length){
      setCurrentState(0);
    }
    else{
      setCurrentState(currentState + num);
    }

		console.log(`num : ${num} \n currentState : ${currentState}`);
  }

	useEffect(()=>{
		getWeather(PLACE_DATAS[currentState].name, PLACE_DATAS[currentState].lat, PLACE_DATAS[currentState].lon);
	},[currentState]);



	return (
		<>
      <button className={styles.arrow} onClick={()=>{formatCurrentState(-1)}} style={{backgroundImage : `url(${process.env.PUBLIC_URL + 'resources/left_arrow.png'})`}}/>
      	<div className={styles.container}>      
       	 	<img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="logo"/>
					<h1 className={styles.content}>{name}</h1>
					<h2 className={styles.content}>{weatherName}</h2>
					<h2 className={styles.content}>{temp}</h2>
					<h3 className={styles.content}>미세먼지 매우나쁨</h3>
      	</div>
      <button className={styles.arrow} onClick={() => {formatCurrentState(1)}} style={{backgroundImage : `url(${process.env.PUBLIC_URL + 'resources/right_arrow.png'})`}}/>
    </>
  );
}

export default Index;