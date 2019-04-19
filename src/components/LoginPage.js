import React, { Component } from 'react';

import './styles/LoginPage.css';
import  Layout from './Layout';
import  Button from './Button';



class LoginPage extends Component {

  render() {
   const  {openLogin} = this.props;
    return (
      <Layout>
        <div className="LoginPage col-12 col-md-12 ">
          <div id="container_demo" >
            <a class="hiddenanchor" id="toregister"></a>
            <a class="hiddenanchor" id="tologin"></a>
            <div className = {`wrapper ${openLogin? "openLogin" : ""}`}>
                <div id="login" class="animate form">
                    <form  action="" autocomplete="on"> 
                        <i class="fa fa-times-circle close"></i>
                        <h1>Вход</h1> 
                        <p> 
                          <label for="username" class="uname" data-icon="u" > Ваш e-mail или логин</label>
                          <input id="username" name="username" required="required" type="text" placeholder="sitehere или sitehere.ru@my.com"/>
                        </p>
                        <p> 
                           <label for="password" class="youpasswd" data-icon="p"> Ваш пароль </label>
                           <input id="password" name="password" required="required" type="password" placeholder="например 123456" /> 
                        </p>
                        <p class="keeplogin"> 
                           <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
                           <label for="loginkeeping">Запомнить меня</label>
                        </p>
                        <p class="login button"> 
                          <Button val="Войти"/> 
                        </p>
                        <p class="change_link">
                           Не зарегистрированы еще ?
                           <a href="#toregister" class="to_register">Присоединяйтесь</a>
                        </p>
                    </form>
                </div>
          
                  <div id="register" class="animate form">
                      <form  action="mysuperscript.php" autocomplete="on"> 
                         <i class="fa fa-times-circle close"></i>
                          <h1> Регистрация </h1> 
                          <p> 
                              <label for="usernamesignup" class="uname" data-icon="u">Ваш логин</label>
                              <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="myname1" />
                          </p>
                          <p> 
                              <label for="emailsignup" class="youmail" data-icon="e" > Ваш e-mail</label>
                              <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="sitehere.ru@my.com"/> 
                          </p>
                          <p> 
                              <label for="passwordsignup" class="youpasswd" data-icon="p">Ваш пароль </label>
                              <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="123456"/>
                          </p>
                          <p> 
                              <label for="passwordsignup_confirm" class="youpasswd" data-icon="p">Подтвердите ваш пароль </label>
                              <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="123456"/>
                          </p>
                              <p class="signin button"> 
                              <Button val="Регистрация"/> 
                          </p>
                          <p class="change_link">  
                              Уже зарегистрированы ?
                              <a href="#tologin" class="to_register"> Войдите на сайт </a>
                          </p>
                      </form>
                  </div>						
              </div>
          </div>
                    
        </div>
      </Layout>
    );
  }
}

export default LoginPage;
