import React, { Component } from 'react';
import Guideline from './Guideline.js';
import { connect } from 'react-redux';
import {getGuidelinesForCategory} from '../../dataRetriever.js'

import '../../css/Category.css';

class Category extends Component {

  render() {
    const {guidelines, isFetching, selectedCategory, categoryText} = this.props

    var guidelineComponents = guidelines.map((guideline, index) =>
      <Guideline
        key={index}
        title={guideline.title}
        text={guideline.text}
        number={guideline.number}
        votes={guideline.votes}
        comments={guideline.comments}
        author={guideline.author}
      />)

    return (
      <div className="Category-div">
        <h1 className="Category-title">
          {selectedCategory}
        </h1>
        <p className="Category-text"> {categoryText}</p>
          {isFetching && guidelines.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && guidelines.length === 0 &&
          <h2>Empty.</h2>
        }

        {guidelineComponents}


      </div>
    );
  }

}

function mapStateToProps(state) {
  const { allData } = state

  const {
    isFetching,
    items: data
  } = allData

  var guidelines = []
  var selectedCategory = ""
  var categoryText = ""
  if(!isFetching) {
    selectedCategory = state['selectedCategory']['selectedCategory']
    guidelines = getGuidelinesForCategory(data, selectedCategory)
    categoryText = data['categories'][selectedCategory]['text']


  }

  return {
    guidelines,
    isFetching,
    selectedCategory,
    categoryText
  }
}


export default connect(mapStateToProps)(Category)
