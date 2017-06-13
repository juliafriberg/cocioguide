import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {actionButtonStyle, normalLabelStyle, textFieldStyle, inputStyle, hintStyle, disabledActionButtonStyle} from '../../styles.js';
import {addNewComment} from '../../dataRetriever.js';

import '../../css/NewCommentComponent.css';

class NewCommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        author: "",
        worktitle: "",
        company: "",
        text: "",
      }
    }
  }

  handleComment = () => {
    addNewComment(this.props.number, {name: this.state.comment.author, worktitle: this.state.comment.worktitle, company: this.state.comment.company}, this.state.comment.text)
    this.setState({
      comment: {
        author: "",
        worktitle: "",
        company:"",
        text:"",
      }
    })
  };

  handleChange = (event) => {
      this.setState({
        comment: Object.assign({}, this.state.comment,
          { [event.target.name]: event.target.value })});


  };

  commentIsValid = () => {
    return this.state.comment.text.trim().length>0 &&
      this.state.comment.author.trim().length>0 &&
      this.state.comment.worktitle.trim().length>0 &&
      this.state.comment.company.trim().length>0
  }

  render() {

    var currentActionButtonStyle = this.commentIsValid() ? actionButtonStyle : disabledActionButtonStyle;

    return (
      <div>
        <div className="Add-comment">

          <div className="Add-comment-header">

            <p className="Add-comment-name-label">I am </p>

            <TextField
              hintText="Name"
              hintStyle={hintStyle}
              inputStyle={inputStyle}
              name="author"
              underlineShow={false}
              style={textFieldStyle}
              fullWidth={true}
              value={this.state.comment.author}
              onChange={this.handleChange}
            />

            <p className="Add-comment-title-label"> and I work as a</p>

            <TextField
              hintText="Title"
              hintStyle={hintStyle}
              inputStyle={inputStyle}
              name="worktitle"
              underlineShow={false}
              style={textFieldStyle}
              fullWidth={true}
              value={this.state.comment.worktitle}
              onChange={this.handleChange}
            />

            <p className="Add-comment-title-label"> at </p>

            <TextField
              hintText="Company"
              hintStyle={hintStyle}
              inputStyle={inputStyle}
              name="company"
              underlineShow={false}
              style={textFieldStyle}
              fullWidth={true}
              value={this.state.comment.company}
              onChange={this.handleChange}
            />

          </div>

          <TextField
            floatingLabelText="Write a comment"
            floatingLabelStyle={hintStyle}
            inputStyle={inputStyle}
            name="text"
            multiLine={true}
            rows={3}
            style={textFieldStyle}
            fullWidth={true}
            underlineShow={false}
            value={this.state.comment.text}
            onChange={this.handleChange}
          />

        </div>

        <div className="Button-div">
          <FlatButton
              label="Send Comment"
              disabled={!this.commentIsValid()}
              onTouchTap={this.handleComment}
              style={currentActionButtonStyle}
              labelStyle={normalLabelStyle}/>
        </div>

      </div>)
    }
}

export default NewCommentComponent;
