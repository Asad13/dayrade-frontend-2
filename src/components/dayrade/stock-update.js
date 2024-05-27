import React, { memo } from 'react';
// componets
import Card from '../../components/bootstrap/card';
import Marquee from 'react-fast-marquee';

const data = [
  { symbol: 'TSLA', change: '-0.37%' },
  { symbol: 'COMP', change: '+1.13%' },
  { symbol: 'AMZN', change: '-0.55%' },
  { symbol: 'LBR', change: '+1.30%' },
  { symbol: 'AMZN', change: '+0.25%' },
  { symbol: 'AAPL', change: '-0.36%' },
  { symbol: 'LBR', change: '+1.40%' },
];

const isStockTrendPositive = (trend) => {
  return parseFloat(trend.substring(0, trend.length - 1)) > 0;
};

const StockUpdate = memo(() => {
  return (
    <div className="dayrade-stock-update-container fixed-bottom">
      <Marquee>
        {data.map((stock, index) => (
          <Card.Body
            key={`${stock.symbol}-${index}`}
            className={`dayrade-stock-update-card ${
              isStockTrendPositive(stock.change)
                ? 'dayrade-stock-update-card-positive'
                : 'dayrade-stock-update-card-negative'
            }`}
          >
            <span>{stock.symbol}</span>
            <span>{stock.change}</span>
          </Card.Body>
        ))}
      </Marquee>
    </div>
  );
});

export default StockUpdate;
