import React, { Component } from 'react';
import Category from './Category.js'
import Menu from "./Menu.js";
import '../../css/Guide.css';

class Guide extends Component {
  constructor() {
    super();
    this.state = {
      content: <Category title="Team"/>
    };

    this.setContent = this.setContent.bind(this);
  }

  setContent(content) {
    this.setState({"content": content});
  }


  render() {
    return (
      <div className="Guide-body">
        <div className="menu">
          <Menu setContent={this.setContent}/>
        </div>
        <div className="content">
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default Guide;
