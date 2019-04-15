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

<<<<<<< HEAD
export default Button;
=======
export default Button;
>>>>>>> 67bcf4fd1ef1764becec94b3e0d8fdbe0918b003
