import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import  PT from 'prop-types';

import RaitingPlace from './RaitingPlace';
import ButtonsBlock from './ButtonsBlock';


import './styles/var.css';
import './styles/AboutPlace.css';


class AboutPlace extends Component {
  render() {
    const {name,pricePerPerson,comments,raiting,phones} = this.props;
  
    return (
      <div className="AboutPlace container">     
        <div className="row AboutPlaceInfo">
       
          <div class = "col-lg-6 col-md-6 col-12 placeInfoBlock">
              <ButtonsBlock />
              <h5 className="name">{name}</h5>
              <span class = "place">Ресторан</span>
          
            <div class = "addressBlock">
                <Link to = "/" className = "d-block"><span><i class="fas fa-map-marker-alt address"></i>пр. Чынгыза Айтматова, 3,  ул. Балтагулова</span></Link>
                <Link  className = "d-block"><i class="fa fa-phone phones"></i>{phones}</Link>
            </div>
            <br/>
            <p class = "place-extra-info"><b>Средний счёт на человека:</b> {pricePerPerson}</p>
            <p class = "place-extra-info"><b>Время работы:</b>	10:00–23:00, без выходных</p>
            
          </div>
          <RaitingPlace commentsCount = {comments.length} raiting = {raiting} />
        </div> 
      </div>
    );
  }
}
AboutPlace.propTypes = {
  name : PT.string.isRequired,
  pricePerPerson: PT.string.isRequired,
  raiting: PT.string.isRequired,
  comments: PT.array.isRequired,
  phones: PT.string.isRequired,

}

export default AboutPlace;
