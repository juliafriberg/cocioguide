import React, { Component } from 'react';

import '../css/Contact.css'

class Contact extends Component {

  render() {
    return (

      <div className="Contact-div">
        <h1>
          Contact
        </h1>
        <div className="Persons-div">
          <div className="Person-div">
            <img className="Circular-image" src="/img/julia.jpg"/>
            <h3>Julia Friberg</h3>
            <p>julia.friberg@varvet.com</p>
          </div>
          <div className="Person-div">
            <img className="Circular-image" src="/img/therese.png"/>
            <h3>Therese Johansson</h3>
            <p>therese@varvet.com</p>
          </div>
        </div>


      </div>

    );
  }
}

export default Contact;
