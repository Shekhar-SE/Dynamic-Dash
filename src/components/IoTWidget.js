import React, { useEffect, useState } from 'react';

function IoTWidget() {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    // Example API call for IoT sensor data
    fetch('https://api.example.com/sensors')
      .then(response => response.json())
      .then(data => setSensorData(data));
  }, []);

  if (!sensorData) return <div>   </div>;

  return (
    <div>
      <h2>IoT Sensor Data</h2>
      <p>Temperature: {sensorData.temperature}°C</p>
      <p>Humidity: {sensorData.humidity}%</p>
      <p>Pressure: {sensorData.pressure} hPa</p>
    </div>
  );
}

export default IoTWidget;
