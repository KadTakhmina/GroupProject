import React, { Component } from 'react';


import Header from "./Header";
import StickyHeader from "./StickyHeader";
import Footer from "./Footer";
import CommentCarousel from './CommentCarousel';

class Layout extends Component {
 
  render() {
    return (
      <div className="Layout">
			<Header/>
			<StickyHeader/>
        {this.props.children}
        <CommentCarousel/>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
