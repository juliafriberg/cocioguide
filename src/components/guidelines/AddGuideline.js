import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import {textFieldStyle, inputStyle, hintStyle, discreteActionButtonStyle, normalLabelStyle, disabledActionButtonStyle} from '../../styles.js';
import {addNewGuideline} from '../../dataRetriever.js';
import Snackbar from 'material-ui/Snackbar';

import '../../css/AddGuideline.css';


class AddGuideline extends Component {
    constructor(props) {
      super(props);

      //Should be changed when adding support for more than one author
      this.state = {
        guideline: {
          author: "",
          worktitle: "",
          company: "",
          title: "",
          text: "",
        },
        dialogOpen: false,
        snackbarOpen: false,
      }
    }

    addGuideline = () => {
      console.log(this.state.guideline);
      this.handleCloseDialog()

      //Should be changed when adding support for more than one author
      var author = {
        1: {
          name: this.state.guideline.author,
          company: this.state.guideline.company,
          worktitle: this.state.guideline.worktitle
        }
      }
      addNewGuideline({author: author, title: this.state.guideline.title, text: this.state.guideline.text}, this.props.category)
      this.setState({snackbarOpen: true});
    };

    handleChange = (event) => {
        this.setState({
          guideline: Object.assign({}, this.state.guideline,
            { [event.target.name]: event.target.value })});
    };

    guidelineIsValid = () => {
      return this.state.guideline.text.trim().length>0 &&
        this.state.guideline.author.trim().length>0 &&
        this.state.guideline.worktitle.trim().length>0 &&
        this.state.guideline.company.trim().length>0 &&
        this.state.guideline.title.trim().length>0
    }


    handleOpenDialog = () => {
      this.setState({dialogOpen: true});
    };

    handleCloseDialog = () => {
      this.setState({
        guideline: {
          author: "",
          worktitle: "",
          company:"",
          text: "",
          title: "",
        },
        dialogOpen: false,
      })
    };

    handleRequestClose = () => {
    this.setState({
      snackbarOpen: false,
    });
  };

    render() {
      const dialogActions = [
        <FlatButton
          label="Cancel"
          primary={false}
          labelStyle={normalLabelStyle}
          onTouchTap={this.handleCloseDialog}
        />,
        <FlatButton
          label="Add"
          primary={true}
          labelStyle={normalLabelStyle}
          disabled={!this.guidelineIsValid()}
          onTouchTap={this.addGuideline}
        />,
      ];

      const fullWidthStyle = {
        width: '100%',
        maxWidth: 'none',
      }

      var customStyle = window.innerWidth < 640 ? fullWidthStyle : {}

      return (
        <div>

        <FlatButton
          label="Add guideline"
          onTouchTap={this.handleOpenDialog}
          style={discreteActionButtonStyle}
          labelStyle={normalLabelStyle}
          icon={<FontIcon
            className="material-icons">
              add
          </FontIcon>}/>

          <div className="Dialog-div">

            <Dialog
              title={"Add new guideline"}
              actions={dialogActions}
              modal={false}
              open={this.state.dialogOpen}
              onRequestClose={this.handleCloseDialog}
              autoScrollBodyContent={true}
              contentStyle={customStyle}
            >

            <p> Here you can add your own guideline in the category {this.props.category}. Keep it short and clear to help as many as possible! </p>
            <p> Category: {this.props.category} </p>
            <TextField
              hintText="Title of the guideline"
              hintStyle={hintStyle}
              inputStyle={inputStyle}
              name="title"
              underlineShow={false}
              style={textFieldStyle}
              fullWidth={true}
              value={this.state.guideline.title}
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
              value={this.state.guideline.text}
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
                value={this.state.guideline.author}
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
                value={this.state.guideline.worktitle}
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
                value={this.state.guideline.company}
                onChange={this.handleChange}
              />

            </div>

            </Dialog>
          </div>
          <Snackbar
            open={this.state.snackbarOpen}
            message="Your guideline has been added."
            bodyStyle={disabledActionButtonStyle}
            contentStyle={inputStyle}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />

        </div>

      );
    }
}


export default AddGuideline;
