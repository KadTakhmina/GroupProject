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
          <a class="dropdown-item" href="#">{`${name}  ${lastName}`}</a>
          <a class="dropdown-item" href="#"><Link className = "d-block">Мои отзывы</Link></a>
          <a class="dropdown-item" href="#"> <Link className = "d-block" to="/LoginPage">Войти</Link> </a>
        </div>
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
