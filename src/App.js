import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Header />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Mencoba belajar react deh</h1>
          <h2>Wah bisa langsung update tuh</h2>
        </header>
      </div>
    );
  }
}

export default App;
