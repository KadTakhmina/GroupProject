import React, { Component } from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";

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
      <div className = "Description container">
        <div className=" row">
         <h3 className="col col-lg-12 ">“Restaurans Name”</h3>
         <div className="col col-lg-12 DescriptionNav" >
            <Link className = "d-inline-block mx-2" to = "/">Описание</Link>
            <Link className = "d-inline-block mx-2" to = "/">Отзывы</Link>
            <Button val = {this.state.btn}/>
         </div>
         <p className = "col-12 text-center">Одно из лучших заведений в Москве - ресторан "Мечта". Здесь царит прекрасная атмосфера, идеально подходящая для веселых встреч с друзьями, теплых семейных обедов и ужинов, а также для романтического свидания со своей второй половинкой.  </p>
        </div>
      </div>
      
    );
  }
}

export default Description;
