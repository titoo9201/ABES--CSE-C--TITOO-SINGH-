import React from 'react';
import './WeatherCard.css';

const WeatherCard = (props) => {
  return (
    <div id='wht'>
      <h2>City: {props.city}</h2>
      <h3>Temperature: {props.temperature}°C</h3>
      <h3>Condition: {props.condition}</h3>
    </div>
  );
};

export default WeatherCard;
