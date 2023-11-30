
import React, { useState } from 'react';
import '../index.css';
import placeholderIcon from '../assets/placeholder.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = '1ceea421eaa68874ee0a34d9fd7f6d93'; 

  const fetchData = async () => {
    try {
      const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(Url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log('Fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

//   return (
//     <div className="weather-container">
//       <div className="search">
//         <input
//           type="text"
//           placeholder="Enter city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {weatherData && (
//         <div className="weather-info">
//           <h2>{weatherData.name}</h2>
//           <div className="icon">
//             {weatherData.weather && weatherData.weather.length > 0 ? (
//               <img
//                 src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
//                 alt={weatherData.weather[0].description}
//               />
//             ) : (
//               <img src={placeholderIcon} alt="Default Weather Icon" />
//             )}
//           </div>
//           <p>{weatherData.weather[0].description}</p>
//           <p>Temperature: {weatherData.main.temp} °C</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
          {weatherData && weatherData.weather && weatherData.weather.length > 0 && (
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{weatherData.name}</h2>
                <div className="weather-icon">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt={weatherData.weather[0].description}
                  />
                </div>
                <p className="card-text">{weatherData.weather[0].description}</p>
                <p className="card-text">Temperature: {weatherData.main.temp} °C</p>
                {/* Add other relevant weather information */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

