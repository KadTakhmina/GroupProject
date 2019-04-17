import React, { Component } from 'react';
import PT from 'prop-types';

import "./styles/Button.css" ;

class Button extends Component {
  render() {
    const {val,isDisabled,toggleDisable} =this.props
    return (
        <button className={`${isDisabled? "disabledButton" : "activeButton"}
          btn Button `} 
                type="submit"
                onClick = {toggleDisable}>
                {val}     
        </button>
    );
  }
}

Button.propTypes = {
  val: PT.string.isRequired,
  isDisabled:PT.bool.isRequired,
  toggleDisable:PT.func.isRequired,
}
export default Button;
