import React, { Component } from 'react';
import {FlatButton} from 'material-ui';

import '../css/MenuButton.css';

const activeTextStyle = {
  "fontStyle":"bold"
}

const normalTextStyle = {
  
}

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
    var style = normalTextStyle;
    if (this.state.active) {
      activeLine = <hr className="ActiveLine"/>
      style = activeTextStyle;
    }

    return (
        <div>
          <FlatButton label={this.state.title} style={style} onTouchTap={() => this.props.setContent(this.state.index)}/>
          {activeLine}
        </div>
    );
  }

}

export default MenuButton;
