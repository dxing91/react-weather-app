import React, { Component, PropTypes } from 'react';
import SearchContainer from '../containers/SearchContainer';

const styles = {
  container: {
    backgroundColor: '#E4FCFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100% - 114px)',
    width: '100%',
    textAlign: 'center'
  },
  h1: {
    paddingBottom: '30px'
  },
  image: {
    height: '200px',
    width: '200px',
    margin: '30px'
  }
}

function Home() {
  return (
    <div style={styles.container}>
      <img style={styles.image} src="/app/images/snoop.png" />
      <h1 style={styles.h1}>Tell Me The Weather!</h1>
      <SearchContainer direction="column" />
    </div>
  );
}

export default Home;
