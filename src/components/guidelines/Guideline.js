import React, { Component } from 'react';
import NumberCircle from './NumberCircle.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import CommentComponent from './CommentComponent.js';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {backgroundLight} from '../../colors.js'

import '../../css/Guideline.css';

const textFieldStyle = {
  "backgroundColor":backgroundLight,
  "paddingLeft": "5px",
}

class Guideline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Guideline title",
      text: "This text is the text that describes what the guideline is and why it is important. This is an introductory text and the rest can be read if clicking anywhere on the guideline.",
      number: 1,
      votes: 5,
      comment: "",
      comments: [{
        author: "Therese",
        text: "What a wonderful guideline",
        worktitle: "Designer",
        company: "Varvet",
        date: new Date(2017, 3, 30, 11, 45, 33, 21),
      }, {
        author: "Julia",
        text: "I use this guideline everyday",
        worktitle: "Developer",
        company: "Varvet",
        date: new Date(2017, 4, 1, 13, 45, 33, 21),
      }]
    };

  }

  componentWillMount() {
  }


  handleComment = () => {
    console.log(this.state.comment);
  };

  handleVote = (vote) => {
    console.log(vote);
    this.setState({votes: this.state.votes + vote})
  };

  handleChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };


  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Comment"
        primary={true}
        onTouchTap={this.handleComment}
        disabled={this.state.comment.length < 1} />
    ];

    var comments = this.state.comments.map((comment, index) =>
      <CommentComponent key={index} author={comment.author} text={comment.text} worktitle={comment.worktitle} date={comment.date} company={comment.company} />
    )

    return (
      <div className="Card-div">
        <div className="Vote-div">
          <FontIcon className="material-icons" style={{"marginLeft":"15px"}} onTouchTap={() => this.handleVote(-1)}>arrow_downward</FontIcon>
          <FontIcon className="material-icons" style={{"marginRight":"5px"}} onTouchTap={() => this.handleVote(1)}>arrow_upward</FontIcon>
          <p>{this.state.votes}</p>
        </div>
        <Card>
          <CardHeader
            actAsExpander={true} style={{"paddingTop":"0px", "paddingBottom":"0px"}}>
              <div className="Guideline-header">
                <NumberCircle number={this.state.number}/>
                <h3 className="Guideline-title">{this.state.title}</h3>
                <div className="Guideline-comment">
                  <FontIcon className="material-icons" style={{"marginRight":"5px"}}>comment</FontIcon>
                  <p>{this.state.comments.length}</p>
                </div>
              </div>
          </CardHeader>
          <CardText style={{"padding":"0px"}}>
            <div className="Guideline-text">
              <p>{this.state.text}</p>

            </div>
          </CardText>

          <CardActions expandable={true} style={{"padding":"0px", "marginRight":"0px"}}>
            <div className="Guideline-comments">

              <div className="Comments-div">
                {comments}
              </div>

              <hr className="Comments-divider"/>

              <div className="Add-comment">
                <div className="Add-comment-header">
                  <p className="Add-comment-name-label">I am </p>
                  <TextField
                    hintText="Name"
                    name="name"
                    underlineShow={false}
                    style={textFieldStyle}
                    onChange={this.handleChange}
                  />
                  <p className="Add-comment-title-label"> and I work as a</p>
                  <TextField
                    hintText="Title"
                    name="title"
                    underlineShow={false}
                    style={textFieldStyle}
                    onChange={this.handleChange}
                  />
                  <p className="Add-comment-title-label"> at </p>
                  <TextField
                    hintText="Company"
                    name="company"
                    underlineShow={false}
                    style={textFieldStyle}
                    onChange={this.handleChange}
                  />
                </div>

                <TextField
                  floatingLabelText="Write a comment"
                  name="comment-text"
                  multiLine={true}
                  rows={3}
                  style={textFieldStyle}
                  fullWidth={true}
                  underlineShow={false}
                  onChange={this.handleChange}
                />

              </div>




              <div className="Button-div">
              <FlatButton label="Send Comment" disabled={this.state.comment.length<1} onTouchTap={this.handleComment} primary={true} style={{"marginBottom":"40px"}}/>
              </div>

            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Guideline;
