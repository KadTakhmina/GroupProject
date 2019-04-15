import React, { Component } from 'react';


import Header from "./Header";
import StickyHeader from "./StickyHeader";

class Layout extends Component {
 
  render() {
    return (
      <div className="Layout">
			<Header/>
			<StickyHeader/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
