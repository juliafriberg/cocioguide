import React, { Component } from 'react';
import Guideline from './Guideline.js';

import '../../css/Category.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  componentWillReceiveProps(props) {
    this.setState({'title': props.title})
  }


  render() {
    return (
      <div className="Category-div">
        <h1 className="Category-title">
          {this.state.title}
        </h1>
        <p className="Category-text"> introductory text to problems here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit bibendum mauris eget pharetra. Praesent eget volutpat metus. Vivamus fermentum velit vel metus eleifend laoreet. Aenean non convallis libero. Etiam augue mi, dictum at erat et, commodo aliquam justo. Cras quis venenatis enim. Maecenas pellentesque quam lacus, vitae bibendum tortor porttitor sit amet.</p>
        <Guideline />
        <Guideline />
      </div>
    );
  }

}

export default  Menu;
