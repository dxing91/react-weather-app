import React, { Component, PropTypes } from 'react';
import SearchContainer from '../containers/SearchContainer';

const styles = {
  container: {
    backgroundColor: '#E4FCFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100% - 114px)',
    width: '100%',
    textAlign: 'center'
  },
  h1: {
    paddingBottom: '30px'
  }
}

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Give Me The Weather!</h1>
      <SearchContainer direction="column" />
    </div>
  );
}

export default Home;
