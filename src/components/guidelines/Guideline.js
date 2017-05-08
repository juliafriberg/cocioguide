import React, { Component } from 'react';
import NumberCircle from './NumberCircle.js';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import CommentComponent from './CommentComponent.js';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {actions} from '../../colors.js';
import {actionButtonStyle, normalLabelStyle, textFieldStyle, inputStyle, hintStyle, iconButtonStyle, disabledActionButtonStyle} from '../../styles.js';
import {addNewComment, changeVotes} from '../../dataRetriever.js';
import '../../css/Guideline.css';

class Guideline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        author: "",
        worktitle: "",
        company:"",
        text:"",
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

  handleVote = (vote) => {
    changeVotes(this.props.number, this.props.votes + vote);
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
      <div className="Card-div">

        <div className="Vote-div">

          <IconButton onTouchTap={() => this.handleVote(-1)} style={iconButtonStyle}>
            <FontIcon className="material-icons">
                arrow_downward
            </FontIcon>
          </IconButton>

          <IconButton onTouchTap={() => this.handleVote(1)} style={iconButtonStyle}>
            <FontIcon
              className="material-icons"
              color={actions}>
                arrow_upward
            </FontIcon>
          </IconButton>

          <p>{this.props.votes}</p>

        </div>

        <Card className="Card">
          <CardHeader
            actAsExpander={true} style={{"paddingTop":"0px", "paddingBottom":"0px"}}>
              <div className="Guideline-header">
                <NumberCircle number={this.props.number}/>
                <h3 className="Guideline-title">{this.props.title}</h3>
                <div className="Guideline-comment">
                  <FontIcon className="material-icons" style={{"marginRight":"5px"}}>comment</FontIcon>
                  <p>{this.props.comments.length}</p>
                </div>
              </div>
          </CardHeader>
          <CardText style={{"padding":"0px"}}>
            <div className="Guideline-text">
              <p>{this.props.text}</p>

            </div>
          </CardText>

          <CardActions expandable={true} style={{"padding":"0px", "marginRight":"0px"}}>

            <div className="Guideline-comments-outer">
            <div className="Guideline-comments">

              <div className="Comments-div">
                {this.props.comments.map((comment, index) =>
                  <CommentComponent
                      key={index}
                      author={comment.author}
                      text={comment.text}
                      worktitle={comment.worktitle}
                      date={comment.date}
                      company={comment.company} />
                )}
              </div>

              <hr className="Comments-divider"/>

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

            </div>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Guideline;
