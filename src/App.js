import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello React</h1>
          <p>Current React Version: {React.version}</p>
        </header>
      </div>
    );
  }
}


export default App;
