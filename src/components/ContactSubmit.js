import React from 'react';

function contactSubmit (event) {
  event.preventDefault();
  let name = event.target.name.value
  let email = event.target.email.value
  let msg = `Hi ${name}, we will contact you at ${email}`
  alert(msg)
}

export default function Contact (props) {
  return (
    <div className="Form-container">
      <h5> Contact Us </h5>
      <form autoComplete="off" onSubmit={contactSubmit}>
        Name: <br></br>
        <input type="text" name="name" /> <br></br>
        Email: <br></br>
        <input type="text" name="email" /> <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
