import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lamp from './Lamp';
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        working: true
      }
  }
  handleClick = () => {
    this.setState({ working: !this.state.working },
      console.log(this.state.working));
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className={this.state.working? 'App-logo-right' : 'App-logo-left'} alt="logo" />
            <h1 className="App-title">Simpsons Quotes</h1>
            <button 
              className="working"
              onClick={this.handleClick}
              >
              CHANGE DIRECTION
            </button>
          </header>
          <Lamp on />
          <Lamp />
          <Quotes />
          </div>
    );
  }
}

export default App;
