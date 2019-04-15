import React, { Component } from 'react';
// import './App.css';

class Button extends Component {
  render() {
    const {val} =this.props
    return (
      // <div className="Button"> 
        <button className="btn btn-primary address" type="submit">{val}</button>
      // </div>
    );
  }
}

export default Button;