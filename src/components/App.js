import React, { Component } from 'react';
import Contact from "./Contact.js";
import About from "./About.js";
import Guide from "./guidelines/Guide.js";
import MenuButton from "./MenuButton.js";
import {initializeDatabase} from "../dataRetriever.js";
import {fetchData} from '../actions.js';
import { connect } from 'react-redux';
import logo from '../img/Logo.png';
import backgroundImage from '../img/background.png';

import '../css/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      menuItems: [{title: "About", content: <About />, active: true},
                  {title: "Guide", content: <Guide />, active: false},
                  {title: "Contact", content: <Contact />, active: false}],
      content: "",
    };

    this.setContent = this.setContent.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchData())
  }

  componentDidUpdate(prevProps) {

  }

  componentWillMount() {
    this.setState({'content': this.state.menuItems[0].content});
    initializeDatabase()
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

      document.body.style.backgroundImage = 'url('+backgroundImage+')';

    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo">
            <img src={logo} alt="Logo"/>

          </div>
          <div className="App-header-links">
            {buttons}
          </div>
        </div>
            {this.state.content}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return(state)
}


export default connect(mapStateToProps)(App)
