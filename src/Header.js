import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} width="200" alt="logo" />
      </div>
    );
  }
}

export default Header;
