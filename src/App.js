import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    this.callBackendAPI()
    //display the result in console
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      //change here if more elements wanted
      body: JSON.stringify({ elements: 10 })
    };
    const response = await fetch('/fibonacci', requestOptions);
    const body = await response.json();
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;