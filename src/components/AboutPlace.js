import React, { Component } from 'react';
<<<<<<< HEAD
import  { Link } from 'react-router-dom';
=======
<<<<<<< HEAD
import  { Link } from 'react-router-dom';
=======
>>>>>>> 67bcf4fd1ef1764becec94b3e0d8fdbe0918b003
>>>>>>> 5438974c0a4fc09fb33ad63cb3c231b6656d6bf1
import RaitingPlace from './RaitingPlace';

import './styles/var.css';
import './styles/AboutPlace.css';

class AboutPlace extends Component {
  render() {
    return (
      <div className="row AboutPlace">
        <div class = "col col-lg-6 place-info-block">
            <div class = "place-name"><b>Restaurans Name</b>
            <br/>
            <span class = "place">Ресторан</span>
            </div>
            <br/>
          <div class = "address-block">
<<<<<<< HEAD
              <Link to = "/" class = "place-location"><span><i class="fas fa-map-marker-alt"></i>  пр. Чынгыза Айтматова 3, ул.Балтагулова</span></Link>
=======
<<<<<<< HEAD
              <Link to = "/" class = "place-location"><span><i class="fas fa-map-marker-alt"></i>  пр. Чынгыза Айтматова 3, ул.Балтагулова</span></Link>
=======
              <a href = "#" class = "place-location"><span><i class="fas fa-map-marker-alt"></i>  пр. Чынгыза Айтматова 3, ул.Балтагулова</span></a>
>>>>>>> 67bcf4fd1ef1764becec94b3e0d8fdbe0918b003
>>>>>>> 5438974c0a4fc09fb33ad63cb3c231b6656d6bf1
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

<<<<<<< HEAD

export default AboutPlace;

=======
<<<<<<< HEAD
export default AboutPlace;
=======
export default AboutPlace;
>>>>>>> 67bcf4fd1ef1764becec94b3e0d8fdbe0918b003
>>>>>>> 5438974c0a4fc09fb33ad63cb3c231b6656d6bf1
