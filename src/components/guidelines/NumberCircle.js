import React, { Component } from 'react';
import {Avatar} from 'material-ui';


import '../../css/NumberCircle.css';

import {
  text,
  highlight,
} from '../../colors.js';

const style = {margin: 5};

class NumberCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number
    };

  }

  componentWillMount() {
  }

  render() {

    console.log(highlight);
    return (
        <div>
        <Avatar
          color={text}
          backgroundColor={highlight}
          size={40}
          style={style}
        >
          #{this.state.number}
        </Avatar>
        </div>
    );
  }
}

export default NumberCircle;
