import React, { Component, PropTypes } from 'react';
import LoadingContainer from '../containers/LoadingContainer'
import Details from '../components/Details';
import Forecast from '../components/Forecast';
import getWeather from '../utils/api';

export default class ForecastContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      weather: []
    }
  }

  componentDidMount() {
    getWeather(this.props.routeParams.location)
      .then((weather) => {
        this.setState({
          loading: false,
          weather
        });
      })
      .catch((error) => console.warn('Error in getWeather when mounting', error));
  }

  componentWillReceiveProps(props) {
    this.setState({
      loading: true
    })
    getWeather(props.routeParams.location)
      .then((weather) => {
        this.setState({
          loading: false,
          weather
        })
      })
      .catch((error) => console.warn('Error in getWeather when updating', error));
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
        <LoadingContainer />
      );
    } else {
      return(
        <Forecast location={this.props.routeParams.location}
                  weather={this.state.weather}
                  onMoreDetails={(forecastWeather) => this.handleMoreDetails(forecastWeather)} />
      );
    }
  }
}

ForecastContainer.contextTypes = {
  router: PropTypes.object.isRequired
}
