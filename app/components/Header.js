import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import SearchContainer from '../containers/SearchContainer';

const styles = {
  header: {
    background: '#FF8700',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  h1: {
    margin: 0,
    fontWeight: 700
  }
}

function Header() {
    return(
      <div style={styles.header}>
        <Link to="/" style={styles.link}><h1 style={styles.h1}>Fo' Drizzle.</h1></Link>
        <SearchContainer direction="row" />
      </div>
    );
}

export default Header;
