import React, { Component } from 'react';
import './styles/HeaderInput.css';



class HeaderInput extends Component {

  render() {
   
    return (
      <div className="HeaderInput col-7">
        <input  type="text" placeholder = "What you looking for?"/>
      </div>
    );
  }
}

export default HeaderInput;
