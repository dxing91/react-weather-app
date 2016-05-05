import React, { PropTypes } from 'react';

function styles(props) {
  return (
    {
      form: {
        display: 'flex',
        flexDirection: props.direction || 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '400px',
        alignSelf: 'right',
        margin: 0
      },
      button: {
        margin: '20px'
      }
    }
  );
}

function Search(props) {
  console.log(styles(props));
  return (
    <div className="form-group" style={styles(props).form}>
      <input className="form-control" type="text" placeholder="Enter Location (e.g. Sydney, Australia)" onChange={props.onUpdateLocation} value={props.location} />
      <button className="btn btn-success" type="submit" onClick={props.onSubmitLocation} style={styles(props).button}>GO</button>
    </div>
  );
}

export default Search;
