import React, { Component, PropTypes } from 'react';
import Search from '../components/Search';

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

export default class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    };
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
    return (
      <div style={styles.container}>
        <h1 style={styles.h1}>Give Me The Weather!</h1>
        <Search onUpdateLocation={(event) => this.handleUpdateLocation(event)}
                onSubmitLocation={(event) => this.handleSubmitLocation(event)}
                location={this.state.location}
                direction="column" />
      </div>
    );
  }
}

HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired
};
