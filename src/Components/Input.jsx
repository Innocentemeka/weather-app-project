import React from 'react';

const Input = () => {
  return (
    <input className='search-bar'
    type="text"
    placeholder='Search' />
  )
}

export default Input

// import React from 'react';
// import './WeatherApp.css';
// import {MdSearch} from 'react-icons/md';


// const WeatherApp = () => {

//   let api_key = "39a2922173caff994c7cf874897b3417";
  

//   const search = async () => {
//     const element = document.getElementsByClassName('cityInput');
//     if (element[0].value=== '') {
//       return 0;
//     }
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

//     let response = await fetch(url);
//     let data = await response.json();
//     const humidity = document.getElementsByClassName('humidity-percent');
//     const wind = document.getElementsByClassName('wind-rate');
//     const temprature = document.getElementsByClassName('weather-temp');
//     const location = document.getElementsByClassName('weather-location');

//     humidity[0].innerHTML = data.main.humidity + ' %';
//     wind[0].innerHTML = data.wind.speed + ' km/h';
//     temprature[0].innerHTML = data.main.temp + ' °c';
//     location[0].innerHTML = data.name;

//   }

//   return (
//     <div className='container'>
//       <div className="top-bar">
//         <input type="text" className='cityInput' />
//         <div className="search-icon" onClick={()=>search()}>
//           <button><MdSearch /></button>
//         </div>
//       </div>
//       <div className="weather-temp">24°c</div>
//       <div className="weather-location">London</div>
//       <div className="data-container">
//         <div className="element">
//           <div className="data">
//             <div className="humidity-percent">64%</div>
//             <div className="text">Humidity</div>
//           </div>
//         </div>
//         <div className="element">
//           <div className="data">
//             <div className="wind-rate">18 km/h</div>
//             <div className="text">Wind Speed</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default WeatherApp