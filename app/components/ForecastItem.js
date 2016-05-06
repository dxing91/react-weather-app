import React from 'react';

const styles = {
  container: {
    margin: '30px',
    width: '220px'
  },
  image: {
    height: '100px',
    width: 'auto',
    margin: '20px',
    cursor: 'pointer'
  }
}

function ForecastItem(props) {
  return (
    <div style={styles.container}>
      <img src={props.icon} onClick={props.onMoreDetails} style={styles.image}/>
      <h3>{props.date}</h3>
    </div>
  );
}

export default ForecastItem;
