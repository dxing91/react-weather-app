import axios from 'axios';
import { processCurrentWeather, processForecastWeather } from './helpers';

const APP_ID = '1bd97c5c275dd5c9d80fba8c53c25549';

function getCurrentWeather(city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APP_ID}`);
}

function getForecast(city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=5&APPID=${APP_ID}`);
}

export default function getWeather(city) {
  const current = getCurrentWeather(city);
  const forecast = getForecast(city);
  return axios.all([current, forecast])
    .then(function(results) {
      const currentWeather = processCurrentWeather(results);
      const forecastWeather = processForecastWeather(results);
      return [currentWeather, forecastWeather];
    })
    .catch(function(error) {
      console.warn('Error in getWeather', error);
    })
}
