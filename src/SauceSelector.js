import React, { Component } from 'react';
import './SauceSelector.css';

const colors = ['Red', 'Blue', 'Green'];

const getButtonStyle = (color, isActive) => ({
  backgroundColor: color,
  border: isActive ? '3px solid lime' : 'none',
});

class SauceSelector extends Component {
  state = {
    color: colors[0],
  };

  handleClick = e => {
    this.setState({ color: e.target.value });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>Active Color: {this.state.color}</div>
        {colors.map(color => (
          <button
            key={color}
            className="SauceSelector-button"
            onClick={this.handleClick}
            value={color}
            style={getButtonStyle(color, this.state.color === color)}
          >
            {color}
          </button>
        ))}
      </div>
    );
  }
}

export default SauceSelector;
