
import React, { Component } from 'react';

import '../../css/CommentComponent.css';

class CommentComponent extends Component {
  
  render() {

    var date = new Date(this.props.date)
    return (
        <div className="Comment-div">
          <div className="Comment-header">
            <div className="Comment-author-div">
              <p className="Comment-author">{this.props.author['name']}</p>
              <p className="Comment-worktitle">{this.props.author['worktitle']} at {this.props.author['company']}</p>
            </div>
            <p className="Comment-date">{date.toLocaleDateString()} &nbsp; {date.getHours()}:{date.getMinutes()} </p>
          </div>
          <p className="Comment-text">{this.props.text}</p>
        </div>
    );
  }
}

export default CommentComponent;
