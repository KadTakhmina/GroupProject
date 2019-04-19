import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import  PT from "prop-types"

import './styles/User.css';


class User extends Component {
  render() {
    const {photo,name,lastName} = this.props;

    return (
      <div class="dropdown">
        <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <img src={photo} alt = "User"/>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <p class="dropdown-item" to="/">{`${name}  ${lastName}`}</p>
          <Link className = "d-block dropdown-item" to  = "/LoginPage">Мои отзывы</Link>
          <p className = "d-block dropdown-item"> Войти</p>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  photo: PT.string.isRequired,
  name: PT.string.isRequired,
  lastName: PT.string.isRequired,
  // toggleLogin: PT.func.isRequired,
}

export default User;
