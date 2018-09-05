import React, { Component } from 'react';
import './Body.css';
import SauceSelector from './SauceSelector';
import cyberbob from './cyberbob.png';

const message = "It's awesome being awesome.";

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <div className="Body-message">
          {this.props.isCyberbob ? 'WHOIS CYBERBOB' : message}
        </div>
        {this.props.isCyberbob ? (
          <img src={cyberbob} alt="cyberbob" />
        ) : (
          <SauceSelector />
        )}
      </div>
    );
  }
}

export default Body;
