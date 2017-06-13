import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSelectedPage} from '../actions.js';

import '../css/MenuButton.css';

import {normalLabelStyle, activeLabelStyle} from '../styles.js';

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this)
  }

  setPage() {
    const { dispatch } = this.props
    dispatch(setSelectedPage(this.props.title))
  }

  render() {
    var activeLine = "";
    var style = normalLabelStyle;
    if (this.props.title === this.props.selectedPage) {
      activeLine = <hr className="ActiveLine"/>
      style = activeLabelStyle;
    }

    return (
        <div className="Page-button">
          <div className="Button" onTouchTap={this.setPage}>
            <p style={style}> {this.props.title} </p>
          </div>
          <div className="Active-line-div">
            {activeLine}
          </div>
        </div>
    );
  }

}

function mapStateToProps(state) {

  const selectedPage = state['selectedPage']['selectedPage']

  return {
    selectedPage
  }
}

export default connect(mapStateToProps)(MenuButton)
