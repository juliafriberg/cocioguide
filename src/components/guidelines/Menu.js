import React, { Component } from 'react';
import Category from "./Category";
import HorizontalMenuButton from '../HorizontalMenuButton.js';

import '../../css/Menu.css';

const menuItems = ["Team",
                  "Feedback",
                  "Remote Work",
                  "Conflicts",
                  "Decisions",
                  "Written Communication",
                  "Verbal Communication",
                  "Sharing Information",
                  "Customer Contact"]

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    };

    this.menuItemClicked = this.menuItemClicked.bind(this);
  }

  componentWillMount() {
    var listItems = this.setupMenuItems();
    this.setState({'menuItems': listItems});
  }


  menuItemClicked(index) {
    for (var itemIndex in this.state.menuItems) {
      this.state.menuItems[itemIndex].active = itemIndex == index ? true : false;
    }

    this.props.setContent(this.state.menuItems[index].content);

  }

  render() {
    var menuItems = this.state.menuItems.map((item, index) =>
      <HorizontalMenuButton key={index} title={item.title} setContent={this.menuItemClicked} active={item.active} index={index}/>
    )


    return (
        <div>
          <div className="Menu-items">
            {menuItems}
          </div>
        </div>
    );
  }


  setupMenuItems() {
    var listItems = [];
    for (var menuIndex in menuItems) {
      var title = menuItems[menuIndex];
      listItems.push({
        title: title,
        content: <Category title={title}/>,
        active: false})
    }

    listItems[0].active = true;
    return listItems;
  }

}

export default  Menu;
