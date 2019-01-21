import React from 'react';

export default class JetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  jetSubmit = (event) => {
    event.preventDefault();
    console.log('submitting jet')
    console.log(event.target)

    const data = {
      'owner_name': 'steve',
      'model': 'Cessna A-37 Dragonfly',
      'seat_capacity': 12,
      'manufactured_date': '2011-04-13T00:00:00.000Z',
      'purchase_price': 7100000000,
      'broker_email': 'jim@broker.com'
    }
    const url = ' https://j950rrlta9.execute-api.us-east-2.amazonaws.com/v1/ArgoChallenge'    
    const header = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        headers: {
            "Content-Type": "application/json",
        },
        'X-API-Key': 'L0Q3GvXCwB9jVSmvaJbw5augw4xHCvMy4Egqim2p',
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }

    console.log(header)

    fetch(url, header)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log('error: ', err)
    })
  }

  render() {
    return (
      <div className="Form-container">
        <h5> New Jets </h5>
        <form autoComplete="off" onSubmit={this.jetSubmit}>
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
