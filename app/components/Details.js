import React from 'react';
import { Link } from 'react-router';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#E4FCFF',
    minHeight: 'calc(100% - 114px)',
    width: '100%',
    padding: '40px'
  },
  widget: {
    margin: '30px'
  },
  image: {
    height: '100px',
    width: 'auto',
    margin: '20px'
  },
  h1: {
    fontSize: '4em',
    margin: '30px'
  },
  h2: {
    fontSize: '2.5em',
    margin: '10px'
  }
}

function Details(props) {
  console.log(props);
  const icon = `/app/images/${props.icon}.svg`;
  if (props.minTemp && props.maxTemp) {
    return (
      <div style={styles.container}>
        <h1 style={styles.h1}>{props.location}</h1>
        <div>
          {props.date ? <h2 style={styles.h2}>{props.date}</h2> : ''}
          <img src={icon} style={styles.image} />
          <p>Description: {props.description}</p>
          <p>Temperature: {props.minTemp} - {props.maxTemp}</p>
          <p>Humidity: {props.humidity}</p>
        </div>
        <Link to={`/forecast/${props.location}`}>Back to overview</Link>
      </div>
    );
  } else {
    return (
      <div style={styles.widget}>
        <h1 style={styles.h1}>{props.location}</h1>
        <div>
          {props.date ? <h2 style={styles.h2}>{props.date}</h2> : ''}
          <img src={icon} style={styles.image} />
          <p>Description: {props.description}</p>
          <p>Temperature: {props.temp}</p>
          <p>Humidity: {props.humidity}</p>
        </div>
      </div>
    );
  }
}

export default Details;
