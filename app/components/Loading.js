import React, { PropTypes } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#E4FCFF',
    height: 'calc(100% - 114px)',
    width: '100%',
  }
}

function Loading(props) {
  return(
    <div style={styles.container}>
      <h1>{props.text}</h1>
    </div>
  )
}

Loading.PropTypes = {
  text: PropTypes.string.isRequired
}

export default Loading;
