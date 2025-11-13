import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const api = '9ac3081b8bfd4c35b2043447251311';
  const cities = ["ghaziabad", "delhi", "noida", "meerut", "bulandshahr", "faridabad"];
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    Promise.all(
      cities.map(city =>
        fetch(`https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`)
          .then(res => res.json())
      )
    ).then(data => setWeatherData(data));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🌦 Weather App</h1>
      {weatherData.length > 0 ? (
        weatherData.map((weather, i) => (
          <WeatherCard
            key={i}
            city={weather.location.name}
            temperature={weather.current.temp_c}
            condition={weather.current.condition.text}
          />
        ))
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default App;
