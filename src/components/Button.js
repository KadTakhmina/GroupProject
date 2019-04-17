import React, { Component } from 'react';;

class Button extends Component {
  render() {
    const {val} =this.props
    return (
        <button className="btn btn-primary address" type="submit">{val}</button>
    );
  }
}


export default Button;
