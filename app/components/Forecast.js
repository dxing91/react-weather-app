import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Details from './Details';
import ForecastItem from './ForecastItem';
import getWeather from '../utils/api';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#E4FCFF',
    minHeight: 'calc(100% - 114px)',
    width: '100%',
    padding: '40px'
  },
  h1: {
    fontSize: '4em',
    margin: '30px'
  },
  h2: {
    fontSize: '2.5em',
    margin: '10px'
  },
  forecast: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

};

function Forecast(props) {
  const currentWeather = props.weather[0];
  const forecastWeather = props.weather[1];

  return(
    <div style={styles.container}>
      <h1 style={styles.h1}>{props.location}</h1>
      <div>
        <h2 style={styles.h2}>Current</h2>
        <Details  icon={currentWeather.icon}
                  description={currentWeather.description}
                  temp={currentWeather.temp}
                  humidity={currentWeather.humidity} />
      </div>
      <div>
        <h2 style={styles.h2}>Forecast</h2>
        <div style={styles.forecast}>
        {forecastWeather.map((forecastWeather, index) => {
          return (
            <ForecastItem date={forecastWeather.date}
                          icon={forecastWeather.icon}
                          key={index}
                          onMoreDetails={() => props.onMoreDetails(forecastWeather)} />
          );})
        }
        </div>
      </div>
      <Link to="/" style={{marginBottom: '40px'}}>Start new search</Link>
    </div>
  );
}

Forecast.PropTypes = {
  weather: PropTypes.array.isRequired,
  onMoreDetails: PropTypes.object.isRequired
}

export default Forecast;
