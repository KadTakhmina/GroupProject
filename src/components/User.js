import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import  PT from "prop-types"
import  Button from './Button';
import './styles/User.css';
import './styles/modalLogin.css';


class User extends Component {
// constructor() {
//   super()
//     const divStyle = {
//       margin: '40px',
//       border: '5px solid pink'
 
// }

// };
  render() {
    const {photo,name,lastName} = this.props;

    return (
      <div class="dropdown">
        <a class="btn Loginimg" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           {/* <img src={photo} alt = "User"/> */}
           {/* <p style={divStyle}>Login</p> */}
           <p style={{"border": "1px solid grey", "padding": "12px 40px", "color": "white"}}>Sign in</p>
           {/* <p style={{"border": "1px solid grey", "padding": "12px 40px", "color": "white"}}>Sign up</p> */}
        </a>
        <div class="dropdown-menu login-menu" aria-labelledby="dropdownMenuLink">
          <p class="dropdown-item" to="/">{`${name}  ${lastName}`}</p>
          <Link className = "d-block dropdown-item" to  = "/LoginPage">Мои отзывы</Link>
          <Link className = "d-block dropdown-item btn btn-primary" data-toggle="modal" data-target="#exampleModalLong"> Войти</Link>
          <Link className = "d-block dropdown-item btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">Регистрация</Link>
        </div>
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Вход</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="email"> 
                  <p> Ваш e-mail</p>
                  <input id="username" name="username" required="required" type="text" placeholder="sitehere@gmail.com"/>
                </div>
                <div className="password"> 
                  <p> Ваш пароль </p>
                  <input id="password" name="password" required="required" type="password" placeholder="например 123456" /> 
                </div>
                <div class="keeplogin"> 
                  <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
                  <label for="loginkeeping">Запомнить меня</label>
                </div>
                
              </div>
              <div class="modal-footer button">
                <p class="btn" data-toggle="modal" data-target="#exampleModalLong"><Button val="Войти"/></p>
                {/* <p class="btn" data-dismiss="modal"><Button val="Закрыть"/></p> */}
                
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">Регистрация</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="login"> 
                  <p>Ваш логин</p>
                  <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="Username" />
                </div>
                <div className="email"> 
                  <p> Ваш e-mail</p>
                  <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="sitehere@gmail.com"/> 
                </div>
                <div className="password"> 
                  <p>Ваш пароль </p>
                  <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="123456"/>
                </div>
                <div className="confirm"> 
                  <p>Подтвердите ваш пароль </p>
                  <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="123456"/>
                </div>
              </div>
              <div class="modal-footer button">
                <p class="btn"><Button val="Продолжить регистрацию"/></p>
                {/* <p class="btn" data-dismiss="modal"><Button val="Закрыть"/></p> */}
                
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

User.propTypes = {
  photo: PT.string.isRequired,
  name: PT.string.isRequired,
  lastName: PT.string.isRequired,
 
}

export default User;
