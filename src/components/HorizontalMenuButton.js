import React, { Component } from 'react';
import {FlatButton} from 'material-ui';
import {text} from '../colors.js';

import '../css/HorizontalMenuButton.css';

const activeTextStyle = {
  "textAlign": "left",
  "width": "100%",
  "color": text,
  "whiteSpace": "normal",
  "fontStyle":"bold"
}

const normalTextStyle = {
  "textAlign": "left",
  "width": "100%",
  "color": text,
  "whiteSpace": "normal",
}

class HorizontalMenuButton extends Component {
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
    var style = normalTextStyle;
    if (this.state.active) {
      activeLine = <hr className="ActiveHorizontalLine"/>
      style = activeTextStyle;
    }

    return (
        <div className="Horizontal">
          <div className="Line-div">
            {activeLine}
          </div>
          <div className="Menu-button-div">
            <FlatButton  label={this.state.title} style={style} onTouchTap={() => this.props.setContent(this.state.index)}/>
          </div>
        </div>
    );
  }

}

export default HorizontalMenuButton;
