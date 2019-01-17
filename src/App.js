import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// move this out
const descriptionLorem = `
8-bit +1 90's, dreamcatcher distillery shoreditch helvetica mlkshk blog venmo. Austin letterpress hammock truffaut microdosing, humblebrag taiyaki chia meditation cronut cornhole offal. Heirloom twee street art umami blue bottle vegan venmo 3 wolf moon normcore humblebrag. Vice poutine vinyl palo santo dreamcatcher tofu meditation. Selvage live-edge plaid succulents, deep v quinoa la croix fingerstache air plant jean shorts bicycle rights thundercats try-hard taxidermy. Flannel locavore keytar fingerstache meditation meggings af air plant messenger bag quinoa williamsburg. Letterpress fam coloring book humblebrag organic yr.
`

const quoteOne = `
"Kombucha stumptown dreamcatcher asymmetrical, knausgaard sartorial godard paleo kogi gastropub hoodie coloring book flannel!" - Katie
`

const quoteTwo = `
"Knausgaard YOLO copper mug mustache sartorial artisan yuccie gentrify tattooed waistcoat butcher!" - Steve
`

const quoteThree = `
"Authentic skateboard enamel pin bespoke echo park kogi neutra artisan." - Earl
`

// these will be moved out
// all stateless ... for now ?

const Header = (props) => {
  console.log('header props: ', props)
  // props: main text, subtext
  return (
    <div>
      <h1> {props.main} </h1>
      <h5> {props.sub} </h5>
    </div>
  )
} 

const Logo = (props) => {
  console.log('logo props: ', props)
  // props: path to logo image
  return (
    <div>
      <img src={props.logo} alt="logo" className="App-logo"/>
    </div>
  )
}

const MiddleSplash = (props) => {
  console.log('middle splash props: ', props)
  // props: path to splash image
  return (
    <div className="Middle-splash">
    </div>
  ) 
}

const Description = (props) => {
  console.log('description props: ', props)
  // props: description, style
  return (
    <div>
      <p> {props.text} </p>
    </div>
  )
}

const Quotes = (props) => {
  console.log('quotes props: ', props)
  // props: description, style
  return (
    <div>
      <p> {props.quote} </p>
    </div>
  )
}

const Contact = (props) => {
  console.log('contact props: ', props)
  // props: description, style
  return (
    <div>
      Contact
    </div>
  )
}

const Footer = (props) => {
  console.log('footer props: ', props)
  // props: description
  return (
    <div>
      Footer
    </div>
  )
}

class App extends Component {
  // TODO - remove the text literal here
  render() {
    return (
      <div className="App">
        <Header main="Xavier" sub="the online quoting system that works for you"/>
        <Logo logo={logo}/>
        <MiddleSplash />
        <Description text={descriptionLorem}/>
        <Quotes quote={quoteOne}/>
        <Quotes quote={quoteTwo}/>
        <Quotes quote={quoteThree}/>
        <Contact />
        <Footer />
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
