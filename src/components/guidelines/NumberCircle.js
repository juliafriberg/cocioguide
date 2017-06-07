import React, { Component } from 'react';
import {Avatar} from 'material-ui';

import {
  text,
  highlight,
} from '../../colors.js';

const style = {margin: 5};

class NumberCircle extends Component {

  render() {

    return (
        <div>
        <Avatar
          color={text}
          backgroundColor={highlight}
          size={40}
          style={style}
        >
          #{this.props.number}
        </Avatar>
        </div>
    );
  }
}

export default NumberCircle;
