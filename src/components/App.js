import React, { Component } from 'react';
import Contact from "./Contact.js";
import About from "./About.js";
import Guide from "./guidelines/Guide.js";
import MenuButton from "./MenuButton.js";

import '../css/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      menuItems: [{title: "Guide", content: <Guide />, active: true},
                  {title: "About", content: <About />, active: false},
                  {title: "Contact", content: <Contact />, active: false}],
      content: "",
    };

    this.setContent = this.setContent.bind(this);
  }

  componentWillMount() {
    this.setState({'content': this.state.menuItems[0].content});
  }

  setContent(index) {
    for (var itemIndex in this.state.menuItems) {
      this.state.menuItems[itemIndex].active = itemIndex == index ? true : false;
    }

    this.setState({"content": this.state.menuItems[index].content});

  }

  render() {
    var buttons = this.state.menuItems.map((item, index) =>
      <MenuButton key={index} title={item.title} setContent={this.setContent} active={item.active} index={index}/>)
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-logo">COCO Guide</h2>
          <div className="App-header-links">
            {buttons}
          </div>
        </div>
            {this.state.content}

      </div>
    );
  }
}

export default App;
