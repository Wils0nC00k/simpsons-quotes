import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lamp from './Lamp';
import Quotes from "./Quotes";
import Avatar from './Avatar';

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
    const bart = {
      image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
      firstName: "Bart",
      lastName: "Simpson"
    };
    const lisa = {
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png",
      firstName: "Lisa",
      lastName: "Simpson"
    };
    const homer = {
      image: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
      firstName: "Homer",
      lastName: "Simpson"
    };
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
          <Lamp on/>
          <Avatar {...bart} />
          <Avatar {...lisa} />
          <Avatar {...homer} />
          </div>
    );
  }
}

export default App;
