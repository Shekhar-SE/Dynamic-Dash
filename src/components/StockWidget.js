import React, { useEffect, useState } from 'react';

function StockWidget() {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    // Example API call for stock data
    fetch('https://api.example.com/stocks/MSFT')
      .then(response => response.json())
      .then(data => setStockData(data));
  }, []);

  if (!stockData) return <div>    </div>;

  return (
    <div>
      <h2>Stock Prices</h2>
      <p>Company: {stockData.company}</p>
      <p>Current Price: ${stockData.currentPrice}</p>
      <p>Change: {stockData.change} ({stockData.percentChange}%)</p>
    </div>
  );
}

export default StockWidget;
