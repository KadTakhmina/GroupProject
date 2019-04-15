import React, { Component } from 'react';
import  PT from "prop-types"
// import './styles/User.css';



class User extends Component {

  render() {
    const {photo,name,lastName} = this.props;

    return (
      <div className="User col-3 d-flex  justify-content-around align-items-center">
       <p>{`${name}  ${lastName}`}</p>
       <img src={photo} alt = "User"/>
      </div>
    );
  }
}

User.propTypes = {
  photo: PT.string.isRequired,
  name: PT.string.isRequired,
  lastName: PT.string.isRequired
}

export default User;
