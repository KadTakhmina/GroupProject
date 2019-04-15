import React, { Component,Fragment } from 'react';

import "./styles/RaitingNav.css"


class RaitingNav extends Component {
 
  render() {
    return (
    <Fragment>
			<span class = "d-inline-block">Рейтинг заведений</span>
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
		</Fragment>
    );
  }
}

export default RaitingNav;
