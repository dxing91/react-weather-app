import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Details from '../components/Details';
import Forecast from '../components/Forecast';
import getWeather from '../utils/api';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#E4FCFF',
    height: 'calc(100% - 114px)',
    width: '100%',
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
    justifyContent: 'space-around',
    alignItems: 'center'
  }

};

export default class ForecastContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      weather: []
    }
  }
  componentDidMount() {
    const location = this.props.routeParams.location;
    getWeather(location)
      .then((weather) => {
        this.setState({
          loading: false,
          weather
        });
      })
      .catch((error) => console.warn('Error in getWeather', error));
  }
  handleMoreDetails(weather) {
    this.context.router.push({
      pathname: `/details/${this.props.routeParams.location}`,
      state: {
        weather
      }
    });
  }
  render() {
    if (this.state.loading) {
      return(
        <div style={styles.container}>
          <h1 style={styles.h1}>Loading...</h1>
        </div>
      );
    } else {
      const [currentWeather, forecastWeather] = this.state.weather;
      return(
        <div style={styles.container}>
          <h1 style={styles.h1}>{this.props.routeParams.location}</h1>
          <div>
            <h2 style={styles.h2}>Current</h2>
            <Details  icon={currentWeather.icon}
                      description={currentWeather.description}
                      minTemp={currentWeather.minTemp}
                      maxTemp={currentWeather.maxTemp}
                      humidity={currentWeather.humidity} />
          </div>
          <div>
            <h2 style={styles.h2}>Forecast</h2>
            <div style={styles.forecast}>
            {forecastWeather.map((weather, index) => <Forecast  date={weather.date}
                                                                icon={weather.icon}
                                                                key={index}
                                                                onMoreDetails={() => this.handleMoreDetails(weather)} />)}
            </div>
          </div>
          <Link to="/" style={{marginBottom: '40px'}}>Start new search</Link>
        </div>
      );
    }
  }
}

ForecastContainer.contextTypes = {
  router: PropTypes.object.isRequired
}
