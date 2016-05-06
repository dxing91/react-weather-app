import React, { Component } from 'react';
import Loading from '../components/Loading';

export default class LoadingContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Loading'
    }
  }

  componentDidMount() {
    const stopper = 'Loading...';
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: 'Loading'
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <Loading text={this.state.text} />
    );
  }
}
