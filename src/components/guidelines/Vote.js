import React, { Component } from 'react';
import {changeVotes} from '../../dataRetriever.js';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {actions} from '../../colors.js';
import {iconButtonStyle} from '../../styles.js';
import '../../css/Vote.css';

class Vote extends Component {

  handleVote = (vote) => {
    changeVotes(this.props.number, this.props.votes + vote);
  };

  render() {
    return (
      <div className="Vote-div">

        <IconButton className="downvote" onTouchTap={() => this.handleVote(-1)} style={iconButtonStyle}>
          <FontIcon className="material-icons">
              arrow_downward
          </FontIcon>
        </IconButton>

        <IconButton className="upvote" onTouchTap={() => this.handleVote(1)} style={iconButtonStyle}>
          <FontIcon
            className="material-icons"
            color={actions}>
              arrow_upward
          </FontIcon>
        </IconButton>

        <p className="votenumber">{this.props.votes}</p>

      </div>
    )
  }

}


export default Vote;
