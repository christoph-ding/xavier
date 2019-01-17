import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// these will be moved out
// all stateless ... for now ?

const Header = (props) => {
  // props: text
  return (
    <div>
      Header
    </div>
  )
} 

const Logo = (props) => {
  // props: path to logo image
  return (
    <div>
      Logo
    </div>
  )
}

const MiddleSplash = (props) => {
  // props: path to splash image
  return (
    <div>
      MiddleSplash
    </div>
  ) 
}

const Description = (props) => {
  // props: description, style
  return (
    <div>
      Description
    </div>
  )
}

const Quotes = (props) => {
  // props: description, style
  return (
    <div>
      Quotes
    </div>
  )
}

const Contact = (props) => {
  // props: description, style
  return (
    <div>
      Contact
    </div>
  )
}

const Footer = (props) => {
  // props: description
  return (
    <div>
      Footer
    </div>
  )
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
