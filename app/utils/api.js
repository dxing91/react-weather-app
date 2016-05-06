import axios from 'axios';
import { processCurrentWeather, processForecastWeather } from './helpers';

const APP_ID = '1bd97c5c275dd5c9d80fba8c53c25549';

function getCurrentWeather(location) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${APP_ID}`);
}

function getForecast(location) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&units=metric&cnt=5&APPID=${APP_ID}`);
}

export default function getWeather(location) {
  const current = getCurrentWeather(location);
  const forecast = getForecast(location);
  return axios.all([current, forecast])
    .then(function(results) {
      const currentWeather = processCurrentWeather(results);
      const forecastWeather = processForecastWeather(results);
      return [currentWeather, forecastWeather];
    })
    .catch(function(error) {
      console.warn('Error in getWeather api', error);
    })
}
