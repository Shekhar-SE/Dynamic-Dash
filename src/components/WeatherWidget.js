import React, { useState, useEffect } from 'react';
import './WeatherWidget.css';

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('Bengaluru'); // Default location
  const [inputLocation, setInputLocation] = useState('');

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  const fetchWeatherData = (loc) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=da5d90204be742a28ae115507242507&q=${loc}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        console.log('Weather data fetched:', data);
        setWeatherData(data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setError('Failed to fetch weather data');
        setWeatherData(null);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputLocation.trim()) {
      setLocation(inputLocation.trim());
      setInputLocation('');
    }
  };

  if (error) return <div className="weather-card error">{error}</div>;
  if (!weatherData) return <div className="weather-card">Loading...</div>;

  return (
    <div className="weather-card">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <img src={`https:${weatherData.current.condition.icon}`} alt={weatherData.current.condition.text} />
      <h2>Weather in {weatherData.location.name}</h2>
      <p className="location">
        {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}
      </p>
      <p className="temperature">
        {weatherData.current.temp_c}°C ({weatherData.current.temp_f}°F)
      </p>
      <p>Condition: {weatherData.current.condition.text}</p>
      <p>Wind: {weatherData.current.wind_kph} kph ({weatherData.current.wind_mph} mph)</p>
      <p>Humidity: {weatherData.current.humidity}%</p>
      <p>Pressure: {weatherData.current.pressure_mb} mb</p>
      <p>Precipitation: {weatherData.current.precip_mm} mm</p>
      <a href="https://www.accuweather.com/" className="view-more" target="_blank" rel="noopener noreferrer">AccuWeather</a>
      <a href="https://weather.com/en-TO/weather/today/l/TNXX0001:1:TN" className="view-more" target="_blank" rel="noopener noreferrer">Weather.com</a>
      <p className="designer">Designed by SS</p>
    </div>
  );
}

export default WeatherWidget;
