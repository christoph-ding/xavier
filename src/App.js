import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// these will be moved out
class Header extends Component {
  // stateless
  // props: text
}

class Logo extends Component {
  // stateless
  // props: path to logo image
}

class MiddleSplash extends Component {
  // stateless
  // props: path to splash image
}

class Description extends Component {
  // stateless
  // props: description, style
}

class Quotes extends Component {
  // stateless
  // props: description, style
}

class Contact extends Component {
  // stateless
  // props: description, style
}

class Footer extends Component {
  // stateless
  // props: description
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Xavier </h1>
      </div>
    );
  }
}

export default App;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
