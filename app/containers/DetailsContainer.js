import React, { Component } from 'react';
import Details from '../components/Details';

export default class DetailsContainer extends Component {
  render() {
    const { icon, date, description, temp, minTemp, maxTemp, humidity } = this.props.location.state.weather;
    const location = this.props.routeParams.location;
    return(
      <Details
        icon={icon}
        location={location}
        date={date}
        description={description}
        temp={temp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        humidity={humidity} />
    );
  }
}
