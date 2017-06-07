import React, { Component } from 'react'
import julia from '../img/julia.jpg';
import therese from '../img/therese.png';

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
            <img className="Circular-image" src={julia} alt="Julia"/>
            <h3>Julia Friberg</h3>
            <p>julia.friberg@varvet.com</p>
          </div>
          <div className="Person-div">
            <img className="Circular-image" src={therese} alt="Therese"/>
            <h3>Therese Johansson</h3>
            <p>therese@varvet.com</p>
          </div>
        </div>


      </div>

    );
  }
}

export default Contact;
