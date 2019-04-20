import React, { Component } from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";
import PT from "prop-types";

import './styles/var.css';
import './styles/Description.css';


class Description extends Component {
  constructor() {
    super();
    this.state = {
      btn: "Заказать",
    }
  }
  render() {
    const {name,description} = this.props;
    return (
      <div className = "Description container">
        <div className=" row">
         <h3 className="col col-lg-12  ">{`"${name}"`}</h3>
         <div className="col col-lg-12 DescriptionNav" >
            <Link className = "d-inline-block mx-2" to = "/">Описание</Link>
            <Link className = "d-inline-block mx-2" to = "/">Отзывы</Link>
            <Link class="btn" data-toggle="modal" data-target="#exampleModal"><Button val = {this.state.btn}/></Link>
         </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Забронируйте столик</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="userName">
                     <p>Ваше имя:</p>
                     <input type="text"/>
                  </div>
                  <div class="userPhone">
                     <p>Ваш номер телефона:</p>
                     <input type="tel"/>
                  </div>
                  <div class="userDate">
                     <p>Укажите дату:</p>
                     <input type="date"/>
                  </div>
                  <div class="userTime">
                     <p>Укажите время:</p>
                     <input type="time"/>
                  </div>
                  <div class="userAmount">
                     <p>Укажите количество гостей:</p>
                     <input type="number"/>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">Забронировать</button>
                </div>
              </div>
            </div>
          </div>
         <p className = "col-12 text-center">{description}</p>
        </div>
      </div>
      
    );
  }
}

Description.propTypes = {
  name: PT.string.isRequired,
  description: PT.string.isRequired,
}


export default Description;
