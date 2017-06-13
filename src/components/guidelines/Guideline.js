import React, { Component } from 'react';
import NumberCircle from './NumberCircle.js';
import CommentComponent from './CommentComponent.js';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import NewCommentComponent from './NewCommentComponent.js';
import Vote from './Vote.js';
import '../../css/Guideline.css';

class Guideline extends Component {

  render() {
    return (
      <div className="Card-div">
        <div className="Vote-component">
          <Vote number={this.props.number} votes={this.props.votes} />
        </div>

        <Card className="Card">

          <CardHeader
            actAsExpander={true} style={{"paddingTop":"0px", "paddingBottom":"0px", "whiteSpace":"wrap"}}>
              <div className="Guideline-header">
                <div className="Number-div">
                  <NumberCircle number={this.props.number} />
                </div>
                <h3 className="Guideline-title">{this.props.title}</h3>
                <div className="Guideline-comment">
                  <FontIcon className="material-icons" style={{"marginRight":"5px"}}>comment</FontIcon>
                  <p className="Guideline-comment-text">{this.props.comments.length}</p>
                </div>
              </div>

          </CardHeader>

          <CardText style={{"padding":"0px"}}>
            <div className="Guideline-text">
              <p>{this.props.text}</p>
            </div>
            <div className="Guideline-author">
              {this.props.author.map((author, index) => <p className="Author-p" key={index}>{author.name}, {author.worktitle} at {author.company}</p>)}
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

                <NewCommentComponent number={this.props.number} />
              </div>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Guideline;
