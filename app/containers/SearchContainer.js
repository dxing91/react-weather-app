import React, { Component, PropTypes } from 'react';
import Search from '../components/Search';
import { toTitleCase } from '../utils/helpers';

export default class SearchContainer extends Component {
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
    const location = toTitleCase(this.state.location);
    this.context.router.push(`/forecast/${location}`);
  }

  render() {
    return (
      <Search onUpdateLocation={(event) => this.handleUpdateLocation(event)}
              onSubmitLocation={(event) => this.handleSubmitLocation(event)}
              location={this.state.location}
              direction={this.props.direction} />
    );
  }
}

SearchContainer.PropTypes = {
  direction: PropTypes.oneOf(["column", "row"]).isRequired
}

SearchContainer.contextTypes = {
  router: PropTypes.object.isRequired
};
