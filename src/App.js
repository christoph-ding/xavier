import React, { Component } from 'react';
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

const legalese = `
Messenger bag taiyaki selvage vape austin. Everyday carry brooklyn skateboard occupy street art.
`

// these will be moved out
// all stateless ... for now ?

const Header = (props) => {
  return (
    <div className="Header">
      <div className="Title-Container">
        <h1> {props.main} </h1>
        <h5> {props.sub} </h5>
      </div>
    </div>
  )
} 

const Description = (props) => {
  return (
    <div className="Description-container">
      <h5> About Xaxier </h5>
      <p> {props.text} </p>
    </div>
  )
}

const Quotes = (props) => {
  return (
    <div className="Quote">
      <p> {props.quote} </p>
    </div>
  )
}

function testSubmit (event) {
  event.preventDefault();
  let name = event.target.name.value
  let email = event.target.email.value
  let msg = `Hi ${name}, we will contact you at ${email}`
  alert(msg)
}

const Contact = (props) => {
  return (
    <div className="Form-container">
      <h5> Contact Us </h5>
      <form autoComplete="off" onSubmit={testSubmit}>
        Name: <br></br>
        <input type="text" name="name" /> <br></br>
        Email: <br></br>
        <input type="text" name="email" /> <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

class JetForm extends Component {
  render() {
    return (
      <div className="Form-container">
        <h5> New Jets </h5>
        <form autoComplete="off" onSubmit={testSubmit}>
          Owner Name: <br></br>
          <input type="text" name="name" /> <br></br>
          Jet Model: <br></br>
          <input type="text" name="model" /> <br></br>
          Jet Seat Capacity: <br></br>
          <input type="text" name="seatCapacity" /> <br></br>
          Manufacturing Date: <br></br>
          <input type="text" name="manufacturingDate" /> <br></br>
          Purchase Price: <br></br>
          <input type="text" name="price" /> <br></br>
          Broker Email <br></br>
          <input type="text" name="email" /> <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const Footer = (props) => {
  return (
    <div className="Footer-container">
      <p> {props.legalese} </p>
    </div>
  )
}

class App extends Component {
  // TODO - remove the text literal here




  render() {
    return (
      <div className="App">      
        <Header main="Xavier" sub="the online quoting system that works for you"/>
        <div className="Body">
          <Description text={descriptionLorem}/>
          <div className="Quotes-container">
            <h5> Past Testimonials </h5>
            <Quotes quote={quoteOne}/>
            <Quotes quote={quoteTwo}/>
            <Quotes quote={quoteThree}/>
          </div>
          <Contact />
          <JetForm />
        </div>
        <Footer legalese={legalese}/>
      </div>
    );
  }
}

export default App;
