import React, { Component } from 'react';
import About from "./About.js";
import Guide from "./guidelines/Guide.js";
import MenuButton from "./MenuButton.js";
import {initializeDatabase} from "../dataRetriever.js";
import {fetchData} from '../actions.js';
import { connect } from 'react-redux';
import logo from '../img/Logo.png';
import backgroundImage from '../img/background.png';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Menu from "./guidelines/Menu.js";
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import '../css/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      menuItems: {
        About: {title: "About", content: <About />, active: true},
        Guide: {title: "Guide", content: <Guide />, active: false}
      },
      content: "",
      open: false
    };

  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchData())
  }

  componentWillMount() {
    initializeDatabase()
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    var buttons = Object.keys(this.state.menuItems).map((key, index) =>
      <MenuButton key={index} title={this.state.menuItems[key].title} />)


    document.body.style.backgroundImage = 'url('+backgroundImage+')';

    var large = {
      width: 96,
      height: 96,
      padding: 24,
    }
    var largeIcon = {
      width: 48,
      height: 48,
    }

    return (



      <div className="App">
        <div className="App-header">

          <div className="Mobile-menu">

            <IconButton
              onTouchTap={this.handleToggle}
              style={large}
              iconStyle={largeIcon}>

              <MenuIcon />
            </IconButton>

            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={(open) => this.setState({"open": open})}>
              <div className="Menu-div" onTouchTap={this.handleToggle}>
                <div className="Top-level-menu-buttons">
                  {buttons}
                </div>
                <Menu />
              </div>
              </Drawer>
            </div>

          <div className="App-logo-div">
            <img className="App-logo-image" src={logo} alt="Logo"/>
          </div>


          <div className="Web-menu">
            {buttons}
          </div>


        </div>
            {this.state.menuItems[this.props.selectedPage].content}
      </div>
    );
  }
}

function mapStateToProps(state) {

  const selectedPage = state['selectedPage']['selectedPage']


  return {
    selectedPage
  }
}

export default connect(mapStateToProps)(App)
