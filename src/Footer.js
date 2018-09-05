import React, { Component } from 'react';
import './Footer.css';

const year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        &copy; {year} Awesome Sauce. All Rights Reserved.
        <div className="Footer-pi" onClick={this.props.handlePiClick}>
          π
        </div>
      </div>
    );
  }
}

export default Footer;
