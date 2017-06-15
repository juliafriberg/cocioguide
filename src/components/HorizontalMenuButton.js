import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSelectedCategory} from '../actions.js';
import {setSelectedPage} from '../actions.js';

import '../css/HorizontalMenuButton.css';

class HorizontalMenuButton extends Component {

  constructor(props) {
    super(props)
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    const { dispatch } = this.props
    dispatch(setSelectedCategory(this.props.title))
    dispatch(setSelectedPage("Guide"))
  }

  render() {
    const {selectedCategory} = this.props
    var activeLine = "";
    if (this.props.title === selectedCategory && this.props.selectedPage === "Guide") {
      activeLine = <hr className="ActiveHorizontalLine"/>
    }

    return (
        <div className="Horizontal" onTouchTap={this.buttonClicked}>
          <div className="Line-div">
            {activeLine}
          </div>
          <div className="Menu-button-div">
            <p className="Normal-menu-button"> {this.props.title} </p>
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
  const selectedPage = state['selectedPage']['selectedPage']

  return {
    isFetching,
    selectedCategory,
    selectedPage
  }
}


export default connect(mapStateToProps)(HorizontalMenuButton)
