import React, { Component } from 'react';

import "./styles/MainInput.css"


class MainInput extends Component {
 
  render() {
    return (
			<div className = " container">
				<form action="" className = "MainInput row">
				<label htmlFor="" className  = "col-lg-12 col-md-12 col-12 ">
					<p className  = "col-lg-12 col-md-12 col-12 ">What are you looking for?</p>
					<input type="text"  className  = "col-lg-12 col-md-12 col-12 "/>
				</label>
				
	    	</form>
			</div>
    
    );
  }
}

export default MainInput;
