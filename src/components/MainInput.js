import React, { Component } from 'react';

import "./styles/MainInput.css"


class MainInput extends Component {
 
  render() {
    return (
			<div className = " container">
				<form action="" className = "MainInput row">
			<label htmlFor="" className  = "col-12">
				<p>Что Вы ищете?</p>
				<input type="text" className  = "col-12"/>
			</label>
			
		</form>
			</div>
    
    );
  }
}

export default MainInput;
