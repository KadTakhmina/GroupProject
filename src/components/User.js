import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import  PT from "prop-types"

import './styles/User.css';


class User extends Component {
  constructor() {
    super();
    this.state = {
      openUser: false
    }
    this.openUser = this.openUser.bind(this)
  }

  openUser() {
     this.setState({openUser: !this.state.openUser});
     console.log("kfkhdkhs")

    };
  render() {
    const {photo,name,lastName} = this.props;

    return (
      <div 
           className="User col-md-3 col-lg-3 col-1 d-flex  justify-content-around align-items-center">
           <img src={photo} alt = "User"
               onClick= {this.openUser }/>  
      <div className = {this.state.openUser ? "openUser" : ""}>
        <p>{`${name}  ${lastName}`}</p>
        <p><Link className = "d-block">Мои отзывы</Link></p>
        <Link className = "d-block">Регистрация</Link>
        <Link className = "d-block">Войти</Link>    
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
