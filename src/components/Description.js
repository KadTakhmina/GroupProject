import React, { Component } from 'react';
import Button from "./Button";

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
    return (
      <div className="Description">
         <h3 className="col col-lg-12 name">“Restaurans Name”</h3>
         <div className="col col-lg-12 selector" >
            <p>Описание</p>
            <p>Отзывы</p>
            <Button val = {this.state.btn}/>
         </div>
         <p className = "col col-lg-12 text">Одно из лучших заведений в Москве - ресторан "Мечта". Здесь царит прекрасная атмосфера, идеально подходящая для веселых встреч с друзьями, теплых семейных обедов и ужинов, а также для романтического свидания со своей второй половинкой.  </p>
         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="d-block w-100 img" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="d-block w-100 img" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="d-block w-100 img" alt="..."/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Description;
