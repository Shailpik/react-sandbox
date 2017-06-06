import React, { Component } from 'react';
import './App.css';

class ShowError extends Component {

  render() {

    return (
      <div className="ShowError">
        {this.props.error}
      </div>

    );
  }
}

export default ShowError;
