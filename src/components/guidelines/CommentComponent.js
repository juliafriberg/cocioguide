import React, { Component } from 'react';

import '../../css/CommentComponent.css';

class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.author,
      text: this.props.text,
      date: this.props.date,
      company: this.props.company,
      worktitle: this.props.worktitle
    };

  }

  componentWillMount() {
  }

  render() {
    return (
        <div className="Comment-div">
          <div className="Comment-header">
            <div className="Comment-author-div">
              <p className="Comment-author">{this.state.author}</p>
              <p className="Comment-worktitle">{this.state.worktitle} at {this.state.company}</p>
            </div>
            <p className="Comment-date">{this.state.date.toLocaleDateString()} &nbsp; {this.state.date.getHours()}:{this.state.date.getMinutes()}</p>
          </div>
          <p className="Comment-text">{this.state.text}</p>
        </div>
    );
  }
}

export default CommentComponent;
