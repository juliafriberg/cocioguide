import React, { Component } from 'react';
import julia from '../img/julia.jpg';
import therese from '../img/therese.png';

import creuna from '../img/logotypes/creuna.png';
import intuniosvg from '../img/logotypes/intunio.svg';
import varvet from '../img/logotypes/varvet.svg';
import uptive from '../img/logotypes/uptive.png';
import wint from '../img/logotypes/wint.png';
import forza from '../img/logotypes/forza.svg';

import '../css/About.css'


class About extends Component {
  render() {
    return (

      <div className="About-div">
        <h1>
          About
        </h1>

        <div className="About-text">
          <p> The COCO Guide is a guide filled with guidelines for how to work together in cross-functional teams. The guidelines presented are based on teams of designers and developers within the IT industry and have been developed through several interviews and workshops with individuals within the industry. However, it is important to note that not all guidelines will fit all teams or projects. The most important guideline is to be aware of the fact that people are different and to make sure to find what works for you. These guidelines are a way to help you get there. </p>
          <p>Feel free to vote and comment on what you think of the guidelines and share your own experience. The purpose of this web page is to share information about how to work efficiently together, and we believe everyone out there has valuable information that can help in this mission. We welcome you to contact us if you have any wonders or thoughts about this. All feedback is greatly appreciated.</p>
          <br />
          <p>These guidelines have been created as a part of a master’s thesis in Interaction Design and Technologies at Chalmers University of Technology. 	</p>
        </div>
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

        <hr className="Logo-divider"/>

        <div className="Logo-div">
          <img className="Logo-image" src={creuna} alt="Creuna"/>
          <img className="Logo-image" src={intuniosvg} alt="Intunio"/>
          <img className="Logo-image" src={varvet} alt="Varvet"/>
        </div>

        <div className="Logo-div">
          <img className="Logo-image" src={uptive} alt="Uptive"/>
          <img className="Logo-image" src={wint} alt="Wint"/>
          <img className="Logo-image" src={forza} alt="Forza Football"/>
        </div>

      </div>

    );
  }
}

export default About;
