import React, { Component } from 'react';
import {FlatButton} from 'material-ui';
import {setSelectedCategory} from '../actions.js';
import { connect } from 'react-redux';

import '../css/HorizontalMenuButton.css';

import {activeLabelStyle, normalLabelStyle, leftAlignedButtonStyle} from '../styles.js';

class HorizontalMenuButton extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    console.log(this.props);
    const { dispatch } = this.props
    dispatch(setSelectedCategory(this.props.title))
  }

  render() {
    const {selectedCategory} = this.props
    var activeLine = "";
    var labelStyle = normalLabelStyle;
    if (this.props.title === selectedCategory) {
      activeLine = <hr className="ActiveHorizontalLine"/>
      labelStyle = activeLabelStyle;
    }

    return (
        <div className="Horizontal">
          <div className="Line-div">
            {activeLine}
          </div>
          <div className="Menu-button-div">
            <FlatButton  label={this.props.title} style={leftAlignedButtonStyle} labelStyle={labelStyle} onTouchTap={this.buttonClicked}/>
          </div>
        </div>
    );
  }

}

function mapStateToProps(state) {
  const { allData } = state

  const {
    isFetching
  } = allData

  const selectedCategory = isFetching ? "" : state['selectedCategory']['selectedCategory']

  return {
    isFetching,
    selectedCategory
  }
}


export default connect(mapStateToProps)(HorizontalMenuButton)
