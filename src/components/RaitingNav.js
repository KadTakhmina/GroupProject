import React, { Component } from 'react';

import "./styles/RaitingNav.css"


class RaitingNav extends Component {
 
  render() {
    return (
			<div className = "col-lg-6 col-sm-12 col-md-7 my-5">
			<h5 class = "d-inline-block">Рейтинг заведений</h5>
					<div class = "RaitingNav">
						<span>Рестораны</span>
						<span className = "raitingBlockArrow">&#10148</span>
						<div class= "resultCategories">
							<span>Отели</span>
							<span>Услуги</span>
							<span>Развелечения</span>
							<span>Курсы</span>
							<span>Еще</span>
						</div>	
					</div>
		</div>
    );
  }
}

export default RaitingNav;
