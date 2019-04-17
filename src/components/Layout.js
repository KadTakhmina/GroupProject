import React, { Component } from 'react';

import Header from "./Header";
import StickyHeader from "./StickyHeader";
import Footer from "./Footer";


class Layout extends Component {
 
  render() {
    return (
      <div className="Layout">
			<Header/>
			<StickyHeader/>
        {this.props.children}
        {/* <RunningString/> */}
        <Footer/>
      </div>
    );
  }
}

export default Layout;
