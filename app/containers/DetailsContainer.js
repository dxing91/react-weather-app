import React, { Component } from 'react';
import { Link } from 'react-router';
import Details from '../components/Details';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#E4FCFF',
    height: 'calc(100% - 114px)',
    width: '100%',
  },
  h1: {
    fontSize: '4em',
    margin: '30px'
  }
}

export default class DetailsContainer extends Component {
  render() {
    const { icon, date, description, minTemp, maxTemp, humidity } = this.props.location.state.weather;
    return(
      <div style={styles.container}>
        <h1 style={styles.h1}>{this.props.routeParams.location}</h1>
        <Details  icon={icon}
                  date={date}
                  description={description}
                  minTemp={minTemp}
                  maxTemp={maxTemp}
                  humidity={humidity} />
        <Link to={`/forecast/${this.props.routeParams.location}`}>Back to overview</Link>
      </div>
    );
  }
}
