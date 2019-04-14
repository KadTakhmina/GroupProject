import React, { Component } from 'react';
import './styles/HeaderInput.css';
import './styles/var.css';



class HeaderInput extends Component {

  render() {
    const {val} =this.props

    return (
      <div className="HeaderInput col-7">
        <input type="text"
        value = {val}/>
      </div>
    );
  }
}

export default HeaderInput;
