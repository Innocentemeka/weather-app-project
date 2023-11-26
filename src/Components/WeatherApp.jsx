import React from 'react';
import './WeatherApp.css';

const WeatherApp = () => {

  return (
  
    <div className='weather loading'>
      <h2 className='city'>Search for City</h2>
      <h1 className='temp'>°c</h1>
      <div className='flex'>
        <img src="https://openweathermap.org/img/wn/10d.png"  className='icon' />
        <div className='description'>Cloudy</div>
      </div>
      <div className='humidity'>Humidity: %</div>
      <div className='wind'>Wind speed: km/h</div>
    </div>
    
  )
}

export default WeatherApp