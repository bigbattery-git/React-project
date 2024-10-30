import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  let [nowData, setNowData] = useState();

  let data = () => {
    axios.get('https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=uC%2FnLTet0%2B0GBBXcGB1T5672DLvnGLqpPsrgOx3088IquRvqNsNSwdhEo8O%2BGIYJ3FPlUlsmDCSYVFOdQCpx%2FQ%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=20241028&base_time=0500&nx=89&ny=90')
    .then((data) => {setNowData(data.data.response.body.items.item[0])})
    .then((error) => console.log(error));
  }

  data();

  return (
    <div className="App">
      {nowData.baseDate}
    </div>
  );
}

export default App;
