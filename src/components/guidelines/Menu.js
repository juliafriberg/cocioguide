import React, { Component } from 'react';
import Category from "./Category";
import HorizontalMenuButton from '../HorizontalMenuButton.js';
import { connect } from 'react-redux';
import {setSelectedCategory} from '../../dataRetriever.js'

import '../../css/Menu.css';


class Menu extends Component {

  render() {
     const {categories} = this.props

    var menuItems = categories.map((item, index) =>
      <HorizontalMenuButton key={index} title={item}/>
    )


    return (
        <div>
          <div className="Menu-items">
            {menuItems}
          </div>
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
  var categories = []

  if(!isFetching) {
    categories = Object.keys(data['categories'])
  }



  return {
    categories,
    isFetching,
  }
}


export default connect(mapStateToProps)(Menu)
