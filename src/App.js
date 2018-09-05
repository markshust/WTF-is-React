import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css';

class App extends Component {
  state = { isPiClicked: false };

  handlePiClick = () => {
    this.setState({ isPiClicked: !this.state.isPiClicked });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Body isCyberbob={this.state.isPiClicked} />
        <Footer handlePiClick={this.handlePiClick} />
      </div>
    );
  }
}

export default App;
