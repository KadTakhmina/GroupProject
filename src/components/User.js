import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import  PT from "prop-types"

import  Button from './Button';
import './styles/User.css';
import './styles/ModalForm.css';


class User extends Component {

  render() {
    const {photo,name,lastName} = this.props;

    return (
      <div class="dropdown">
        <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <Button val = "Войти"/>     
        </a>
        <div class="dropdown-menu loginDropMenu" aria-labelledby="dropdownMenuLink">
          <p class="dropdown-item userDropDown" to="/">{`${name}  ${lastName}`}</p>
          <Link className = "d-block dropdown-item userDropDown" to  = "/LoginPage">Мои отзывы</Link>
          <Link className = "d-block dropdown-item userDropDown" data-toggle="modal" data-target="#exampleModalLong"> Войти</Link>
          <Link className = "d-block dropdown-item userDropDown" data-toggle="modal" data-target="#exampleModalScrollable">Регистрация</Link>
        </div>
        <div class="modal fade modalpage" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
            
              <div class="modal-body">
              <h5 class="modal-title modalTitles" id="exampleModalLongTitle">Вход</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              <form>
              <label htmlFor=""  className = "w-100 d-block">Введите имя
                <input className = "FormInputs" type="text" required placeholder = "Ваше имя"/>
              </label>
              
              <label htmlFor="" className = "w-100 d-block">Ваш пароль
                <input className = "FormInputs" type="password"placeholder ="Ваш пароль" required/>
              </label>
              <p className = "d-flex justify-content-between">
                <Link to ="/">Забыли пароль?</Link>
                <Link className = "d-block " data-toggle="modal" data-target="#exampleModalScrollable">Регистрация</Link>

              </p>

              
          <Button val = "Войти"/>
              </form>
                
              </div>
             
            </div>
          </div>
        </div>
        <div class="modal fade " id="exampleModalScrollable" tabindex="-2" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable " role="document">
            <div class="modal-content ">
              <div class="modal-body ">
              <h5 className="modalTitles" id="exampleModalScrollableTitle">Регистрация</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              <form>
              <label htmlFor=""  className = "w-100 d-block">Введите имя
                <input className = "FormInputs" type="text" placeholder = "Ваше имя" required/>
              </label>
              <label htmlFor=""  className = "w-100 d-block">Введите email
                <input className = "FormInputs" type="email" placeholder = "Ваш email" required/>
              </label>
              
              <label htmlFor="" className = "w-100 d-block">Ваш пароль
                <input className = "FormInputs" type="password"placeholder ="Ваш пароль" required/>
              </label>
          <Button val = "Зарегистрироваться"/>
              </form>
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
