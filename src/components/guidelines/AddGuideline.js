import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {actions} from '../../colors.js';
import {iconButtonStyle} from '../../styles.js';
import TextField from 'material-ui/TextField';
import {actionButtonStyle, normalLabelStyle, textFieldStyle, inputStyle, hintStyle, disabledActionButtonStyle} from '../../styles.js';

import '../../css/AddGuideline.css';


class AddGuideline extends Component {
    constructor(props) {
      super(props);
      this.state = {
        guideline: {
          author: {
            name: "",
            worktitle: "",
            company: "",
          },
          title: "",
          text: "",
        },
        open: false,
      }
    }

    AddGuideline = () => {
      /*
      addNewGuideline(this.props.number, {name: this.state.comment.author, worktitle: this.state.comment.worktitle, company: this.state.comment.company}, this.state.comment.text)
      this.setState({
        comment: {
          author: "",
          worktitle: "",
          company:"",
          text:"",
        }
      })*/
    };

    handleChange = (event) => {
        /*this.setState({
          guideline: Object.assign({}, this.state.comment,
            { [event.target.name]: event.target.value })});*/


    };

    guidelineIsValid = () => {
      return
        this.state.guideline.text.trim().length>0 &&
        this.state.guideline.author.name.trim().length>0 &&
        this.state.guideline.author.worktitle.trim().length>0 &&
        this.state.guideline.author.company.trim().length>0 &&
        this.state.guideline.title.trim().length>0
    }


    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    render() {


      const dialogActions = [
        <FlatButton
          label="Cancel"
          primary={false}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Add"
          primary={true}
          disabled={!this.guidelineIsValid()}
          onTouchTap={this.handleClose}
        />,
      ];

      return (
        <div>
        <IconButton onTouchTap={this.handleOpen} style={iconButtonStyle}>
          <FontIcon
            className="material-icons"
            color={actions}>
              add_circle
          </FontIcon>
        </IconButton>
          <Dialog
            title={"Add new guideline"}
            actions={dialogActions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >

          <p> Here you can add your own guideline in the category {this.props.category}. Keep it short and clear to help as many as possible! </p>

          <TextField
            hintText="Title"
            hintStyle={hintStyle}
            inputStyle={inputStyle}
            name="title"
            underlineShow={false}
            style={textFieldStyle}
            fullWidth={true}
            value={this.state.guideline.author.name}
            onChange={this.handleChange}
          />

          <TextField
            className="New-guideline-text"
            hintText="Descriptive text"
            hintStyle={hintStyle}
            inputStyle={inputStyle}
            name="text"
            underlineShow={false}
            style={textFieldStyle}
            fullWidth={true}
            multiLine={true}
            rows={3}
            value={this.state.guideline.author.name}
            onChange={this.handleChange}
          />


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
              value={this.state.guideline.author.name}
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
              value={this.state.guideline.author.worktitle}
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
              value={this.state.guideline.author.company}
              onChange={this.handleChange}
            />

          </div>

          </Dialog>
        </div>
      );
    }
}


export default AddGuideline;
