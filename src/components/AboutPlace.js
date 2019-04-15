import React, { Component } from 'react';
import RaitingPlace from './RaitingPlace';

class AboutPlace extends Component {
  render() {
    return (
      <div className="row AboutPlace">
        <div class = "col col-lg-7 place-info-block">
            <p class = "place-name"><b>Restaurans Name</b>
            <br/>
            <span class = "place">Ресторан</span>
            </p>
          <div class = "address-block">
              <a href = "#" class = "place-location"><span><i class="fas fa-map-marker-alt"></i>  пр. Чынгыза Айтматова 3, ул.Балтагулова</span></a>
              <p class = "place-number"><i class="fa fa-phone"></i> Показать телефон</p>
          </div>
          <br/>
          <p class = "place-extra-info"><b>Средний счёт на человека:</b>	400–500 сом</p>
          <p class = "place-extra-info"><b>Время работы:</b>	10:00–23:00, без выходных</p>
        </div>
        <RaitingPlace/>
      </div>
    );
  }
}

export default AboutPlace;
