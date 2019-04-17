import React, { Component } from 'react';
import './styles/HeaderInput.css';



class HeaderInput extends Component {

  render() {
   
    return (
      <div className="HeaderInput col-7">
        <input  type="text" placeholder = "Что Вы ищете?"/>
        <img src="src/img/smallSearchIcon.svg" alt="search-icon" />
      </div>
    );
  }
}

export default HeaderInput;
