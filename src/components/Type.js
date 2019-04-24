import React, { Component } from 'react';
import TypeIt from 'typeit';



class Type extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    new TypeIt(this.el, this.props);
  }
  
  render(){
    return <span ref={(el) => { this.el = el; }}>{this.props.children}</span>;
  
    <Type 
      strings="Out of 100 men, one will read the Bible, the other 99 will read the Christian. <br> – D. L. Moody"
      loop={true}
      loopDelay={5000}
      speed={40}
    />
    
  }
}

export default Type;
