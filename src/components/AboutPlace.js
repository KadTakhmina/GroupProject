import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

import RaitingPlace from './RaitingPlace';
import ButtonsBlock from './ButtonsBlock';
import Description from './Description';

import './styles/var.css';
import './styles/AboutPlace.css';


class AboutPlace extends Component {
  render() {
    return (
      <div className="AboutPlace container">
        <div className="row">
          <Description/> 
        </div>
        <div className="row">
          <div class = "col col-lg-6 placeInfoBlock">
              <h5>Restaurans Name</h5>
              <span class = "place">Ресторан</span>
              <br/>
            <div class = "addressBlock">
                <Link to = "/" className = "d-block"><span><i class="fas fa-map-marker-alt"></i>  пр. Чынгыза Айтматова 3, ул.Балтагулова</span></Link>
                <Link  className = "d-block"><i class="fa fa-phone"></i> Показать телефон</Link>
            </div>
            <br/>
            <p class = "place-extra-info"><b>Средний счёт на человека:</b>	400–500 сом</p>
            <p class = "place-extra-info"><b>Время работы:</b>	10:00–23:00, без выходных</p>
            <ButtonsBlock/>
          </div>
          <RaitingPlace/>
        </div> 
      </div>
    );
  }
}

export default AboutPlace;
