import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Search from './Search';

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

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    }
  }

  handleUpdateLocation(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleSubmitLocation(event) {
    event.preventDefault();
    const location = this.state.location;
    this.setState({
      location: ''
    });
    this.context.router.push(`/forecast/${location}`);
  }

  render() {
    return(
      <div style={styles.header}>
        <Link to="/" style={styles.link}><h1 style={styles.h1}>Fo' Drizzle.</h1></Link>
        <Search onUpdateLocation={(event) => this.handleUpdateLocation(event)}
                onSubmitLocation={(event) => this.handleSubmitLocation(event)}
                direction="row" />
      </div>
    );
  }

}

Header.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Header;
