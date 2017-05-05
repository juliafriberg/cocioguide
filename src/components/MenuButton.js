import React, { Component } from 'react';
import {FlatButton} from 'material-ui';

import '../css/MenuButton.css';

import {normalLabelStyle, activeLabelStyle} from '../styles.js';

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      active: this.props.active,
      index: this.props.index,

    };
  }

  componentWillReceiveProps(props) {
    this.setState({active: props.active});
  }


  render() {
    var activeLine = "";
    var style = normalLabelStyle;
    if (this.state.active) {
      activeLine = <hr className="ActiveLine"/>
      style = activeLabelStyle;
    }

    return (
        <div>
          <FlatButton label={this.state.title} labelStyle={style} onTouchTap={() => this.props.setContent(this.state.index)}/>
          {activeLine}
        </div>
    );
  }

}

export default MenuButton;
