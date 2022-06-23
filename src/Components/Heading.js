import React, { Component } from 'react';
import logo from '../Assets/logo.png';
export default class Heading extends Component {
  render() {
    return (
      <div className="bg">
        <nav className="navbar">
          <div className="container">
            <a href="/" className="navbar-brand navbar-custom">
              <img src={logo} style={{ width: 40 }} alt="Logo" />
              <span className="ms-3">HADITH</span>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
