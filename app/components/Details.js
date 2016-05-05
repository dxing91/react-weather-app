import React from 'react';

const styles = {
  container: {
    margin: '30px'
  },
  image: {
    height: '100px',
    width: 'auto',
    margin: '20px'
  },
  h2: {
    fontSize: '2.5em',
    margin: '10px'
  }
}

function Details(props) {
  const icon = `/app/images/${props.icon}.svg`;
  return (
    <div style={styles.container}>
      {props.date ? <h2 style={styles.h2}>{props.date}</h2> : ''}
      <img src={icon} style={styles.image} />
      <p>Description: {props.description}</p>
      <p>Min Temp: {props.minTemp}</p>
      <p>Max Temp: {props.maxTemp}</p>
      <p>Humidity: {props.humidity}</p>
    </div>
  );
}

export default Details;
