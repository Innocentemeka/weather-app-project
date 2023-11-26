import './Components/WeatherApp.css';
import WeatherApp from "./Components/WeatherApp";
import Input from './Components/Input';
import Button from './Components/Button';
import {MdSearch} from 'react-icons/md';


function App() {

  let api_key = "39a2922173caff994c7cf874897b3417";
  
  const search = async () => {
    const searchBar = document.getElementsByClassName('search-bar');
    if (searchBar[0].value=== '') {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBar[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName('humidity');
    const wind = document.getElementsByClassName('wind');
    const temprature = document.getElementsByClassName('temp');
    const city = document.getElementsByClassName('city');

    humidity[0].innerHTML = 'Humidity: ' + data.main.humidity + ' %';
    wind[0].innerHTML = 'Wind speed: ' + Math.floor(data.wind.speed) + ' km/h';
    temprature[0].innerHTML = Math.floor( data.main.temp) + ' °c';
    city[0].innerHTML = "Weather in " + data.name;
  }


  return (
    <div className='card'>
      <div className='search'>
        <Input />
        <Button onClick={()=>search()} value={<MdSearch />} />
      </div>
      <WeatherApp />
    </div>
  );
}

export default App;
