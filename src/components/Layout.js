import React, { Component } from "react";

import StickyHeader from "./StickyHeader";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <StickyHeader />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
