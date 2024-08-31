import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import StockWidget from './components/StockWidget';
import IoTWidget from './components/IoTWidget';
import './App.css';


function App() {
  return (
    <div className="App">
      <WeatherWidget />
      <StockWidget />
      <IoTWidget />
    </div>
  );
}

export default App;
