import React, { Component} from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import User from "./User";
// import userPhoto from "../img/user.svg"

import "./styles/Categories.css";

class Categories extends Component {
  render() {
    return (
      <div className="Categories" style={{ display: "flex", flexWrap: "wrap" }}>
        <div class="blocks col-6">
          {/* <img class="category-img" src="http://navat.com.kz/wp-content/uploads/2018/01/Navat-Almaty-16.jpg" alt="res"/></div> */}
          <div class="grid">
            <figure class="effect">
              <img
                src="http://navat.com.kz/wp-content/uploads/2018/01/Navat-Almaty-16.jpg"
                alt="img12"
                style={{ "width": "100%" }}
              />
              <figcaption>
                <div>
                  <h2>Рестораны</h2>
                  <p>Самая вкусная еда</p>
                </div>
                <Link to="/restauranRatings">Увидеть больше</Link>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="blocks col-6">
          <div class="grid">
            <figure class="effect">
              <img
                class="category-img"
                src="http://www.orionbishkek.com/images/uploads/8279cbe95dc8101a3c6bffc532db6fe0.jpg"
                alt="hot"
              />
              <figcaption>
                <div>
                  <h2>Отели</h2>
                  <p>Лучшие отели города</p>
                </div>
                <Link to="/restauranRatings">Увидеть больше</Link>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="blocks col-6">
          <div class="grid">
            <figure class="effect">
              <img
                class="category-img"
                src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/01/11/1725/Hyatt-Regency-Bishkek-P067-Exterior.jpg/Hyatt-Regency-Bishkek-P067-Exterior.4x3.jpg"
                alt="res"
              />
              <figcaption>
                <div>
                  <h2>Концеренции</h2>
                  <p>Конференц-залы отеля "Hyatt" помогут Вам безупречно провести мероприятие</p>
                </div>
                <Link to="/restauranRatings">Увидеть больше</Link>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="blocks col-6">
          <div class="grid">
            <figure class="effect">
              <img
                class="category-img"
                src="https://s-ec.bstatic.com/images/hotel/max1280x900/138/138885035.jpg"
                alt="hot"
              />
              <figcaption>
                <div>
                  <h2>Отели на природе</h2>
                  {/* <p>отдохните от городской суеты в гармонии с природой!</p> */}
                </div>
                <Link to="/restauranRatings">Увидеть больше</Link>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="blocks col-6">
          <div class="grid">
            <figure class="effect">
              <img
                class="category-img"
                src="https://s26552.pcdn.co/wp-content/uploads/2017/11/supra.jpeg"
                alt="res"
              />
              <figcaption>
                <div>
                  <h2>Заказ еды</h2>
                  <p>Доставка по всему городу</p>
                </div>
                <Link to="/restauranRatings">Увидеть больше</Link>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="blocks col-6">
          <div class="grid">
            <figure class="effect">
              <img
                class="category-img"
                src="https://supara.kg/wp-content/uploads/2017/06/7.yurt-big-05-600x400.jpg"
                alt="hot"
                style={{"width":"100%"}}
              />
              <figcaption>
                <div>
                  <h2>Банкеты</h2>
                  <p>Мы поможем Вам найти самые крутые банкетные места</p>
                </div>
                <Link to="/restauranRatings">Увидеть больше</Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    
    );
  }
}

export default Categories;
