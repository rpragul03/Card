import React, { useEffect } from "react";
import { useState } from "react";
import './Weather.css'
import axios from "axios";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather,setWeather]=useState(null);
  const apiKey = "6cd0692a91dd730799db8b3078386aa9"; 
  
  const getApiDetails = async () => {
    if (!city) return;
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
          )
        .then((res) => {
          setWeather(res.data)
          console.log(res.data);
          
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiDetails();
  }, []);

  const handleSubmit=(event)=>{
event.preventDefault();
getApiDetails();
  }
  return (
    <>
      <div className="container">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter City"
            name="weatherinput"
            value={city}
            onChange={(event)=>setCity(event.target.value)}
            required
          />
          <button type="submit" className="btn btn-success">Enter</button>
        </form>

       {weather ? (
        <>
        <div className="display">
            <h3>{weather.name}</h3>
            <p><span>COUNTRY</span> : {weather.sys.country}</p>
            <p><span>LATITUDE</span> : {weather.coord.lat}</p>
            <p><span>LONGTITUDE</span> : {weather.coord.lon}</p>
            <p><span>HUMIDITY</span> : {weather.main.humidity}</p>
            <p><span>TEMPERATURE</span> : {weather.main.temp}</p>
            <p><span>WEATHER</span> : {weather.weather[0].description}</p>
            <p><span>WIND SPEED</span> : {weather.wind.speed}</p>
        </div>
        </>
       ):(<p>Loading Weather Data...</p>)}
      </div>
    </>
  );
};

export default Weather;
