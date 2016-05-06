const dayMap = {
  '0': 'Sun',
  '1': 'Mon',
  '2': 'Tue',
  '3': 'Wed',
  '4': 'Thu',
  '5': 'Fri',
  '6': 'Sat'
};

const monthMap = {
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dev'
};

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function processDate(date = '') {
  const dateInMilliseconds = new Date(date * 1000);
  const day = dayMap[dateInMilliseconds.getDay()];
  const month = `${monthMap[dateInMilliseconds.getMonth()]} ${dateInMilliseconds.getDate()}`;
  return `${day}, ${month}`;
}


function processCurrentWeather(results) {
  const current = results[0].data;
  const date = processDate();
  return {
    date,
    description: toTitleCase(current.weather[0].description),
    icon: `/app/images/${current.weather[0].icon}.svg`,
    temp: `${current.main.temp_min}°C`,
    humidity: current.main.humidity
  }
}

function processForecastWeather(results) {
  const forecast = results[1].data;
  let date;
  let forecastWeather = [];
  for (let i = 0; i < 5; i++) {
    date =  processDate(forecast.list[i].dt);
    forecastWeather.push({
      date,
      description: toTitleCase(forecast.list[i].weather[0].description),
      icon: `/app/images/${forecast.list[i].weather[0].icon}.svg`,
      minTemp: `${forecast.list[i].temp.min}°C`,
      maxTemp: `${forecast.list[i].temp.max}°C`,
      humidity: forecast.list[i].humidity
    })
  }
  return forecastWeather;
}

export { toTitleCase, processCurrentWeather, processForecastWeather };
