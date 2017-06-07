import React, { Component } from 'react';

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

      </div>

    );
  }
}

export default About;
