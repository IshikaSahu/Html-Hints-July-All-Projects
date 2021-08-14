import React from 'react'
import {useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

   const [weather, setWeather] = useState([]);
   const [visible, setVisible] = useState(false);

   useEffect(() => {
     axios.get('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=f764843074dabfc1643e4eeded4615af&units=metric')
     .then(res =>{
       setWeather(res.data);
       setVisible(true);
     })
     
   }, []);


    return (
    <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center px-3">
        <div class="card">
            <h1 class="ml-auto mr-4 mt-3 mb-0">{ visible && weather.name}</h1>
            <h2 class="ml-auto mr-4 large-font">{ visible && weather.sys.country}</h2>
            <h2 class="time-font mb-0 ml-4 mt-auto">{visible && weather.main.temp}&#176;</h2>
            <p class="ml-4 mb-4"></p>
        </div>
    </div>
</div>
  );
}

export default App;
