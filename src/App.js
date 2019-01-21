import React, { Component } from 'react';
import './App.css';

// components
import Header from './components/Header.js';
import Description from './components/Description.js';
import Quotes from './components/Quotes.js';
import Contact from './components/ContactSubmit.js';
import JetForm from './components/JetSubmit.js';
import Footer from './components/Footer.js';

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

class App extends Component {
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
