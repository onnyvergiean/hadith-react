import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';
import '../Assets/Spinner.css';
export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <ClipLoader size={100} color={'#1a645b'} />
        <h4>Loading Data...</h4>
      </div>
    );
  }
}
