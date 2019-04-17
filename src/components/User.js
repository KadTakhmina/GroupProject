import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import  PT from "prop-types"

import './styles/User.css';



class User extends Component {

  render() {
    const {photo,name,lastName} = this.props;

    return (
      <div className="User col-md-3 col-lg-3 col-1 d-flex  justify-content-around align-items-center">
      <div>
        <p>{`${name}  ${lastName}`}</p>
        <p><Link className = "d-block">Мои отзывы</Link></p>
        <Link className = "d-block">Регистрация</Link>
        <Link className = "d-block">Войти</Link>    
      </div>
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
