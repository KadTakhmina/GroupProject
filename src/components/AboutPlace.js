import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import RaitingPlace from './RaitingPlace';
import Description from './Description';



import './styles/var.css';
import './styles/AboutPlace.css';


class AboutPlace extends Component {
  render() {
    return (
      <div className="AboutPlace">
        <div className="row flex-description">
          <Description/> 
        </div>
        <div className="row">
          <div class = "col col-lg-6 place-info-block">
              <div class = "place-name"><b>Restaurans Name</b>
              <br/>
              <span class = "place">Ресторан</span>
              </div>
              <br/>
            <div class = "address-block">
                <Link to = "/" class = "place-location"><span><i class="fas fa-map-marker-alt"></i>  пр. Чынгыза Айтматова 3, ул.Балтагулова</span></Link>
                <p class = "place-number"><i class="fa fa-phone"></i> Показать телефон</p>
            </div>
            <br/>
            <p class = "place-extra-info"><b>Средний счёт на человека:</b>	400–500 сом</p>
            <p class = "place-extra-info"><b>Время работы:</b>	10:00–23:00, без выходных</p>
          </div>
          <RaitingPlace/>
        </div> 
      </div>
    );
  }
}

export default AboutPlace;
