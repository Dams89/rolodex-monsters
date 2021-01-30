import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string : 'Hello I am Damiano'
    }
  }

  render() {
    return(
      <div className='App'>
      <header class='header-App'>
        <p> {this.state.string} </p>
        <button onClick = {() => this.setState({string: '...and I love coding'})}> Click here </button>
        </header>
      </div>
    )
  }
}
export default App;
