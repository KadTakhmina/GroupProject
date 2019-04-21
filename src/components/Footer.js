import React, { Component } from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="container py-5">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-6">
              <ul class="list-unstyled text-small text-left">
              <h5>О нас</h5>
                <li>
                  <Link to="/" class="footerLink" >
                    O сервисе
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    O нас
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Подробнее
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              
              <ul class="list-unstyled text-small text-left">
              <h5>Новости</h5>
                <li >
                  <Link to="/" class="footerLink">
                    Новости
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Рейтинги
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                   Отзывы
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Поиск
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              
              <ul class="list-unstyled text-small text-left">
              <h5>Карта</h5>
                <li>
                  <Link to="/" class="footerLink">
                    Карта
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Поиск
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Места
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              
              <ul class="list-unstyled text-small text-left">
              <h5>Заведения</h5>
                <li>
                  <Link to="/" class="footerLink">
                    Рестораны
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Отели
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Курсы
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Услуги
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>
          <Link to="/">
            <img
              class="footer-img"
              alt="icon"
              src="https://image.flaticon.com/icons/svg/145/145802.svg"
            />
          </Link>
          <Link to="/">
            <img
              class="footer-img"
              alt="icon"
              src="https://image.flaticon.com/icons/svg/145/145812.svg"
            />
          </Link>
          <Link to="/">
            <img
              class="footer-img"
              alt="icon"
              src="https://image.flaticon.com/icons/svg/145/145807.svg"
            />
          </Link>
          <Link to="/">
            <img
              class="footer-img"
              alt="icon"
              src="https://image.flaticon.com/icons/svg/145/145813.svg"
            />
          </Link>
          <div class="footer-address">
            <Link to="https://goo.gl/maps/3irVhq4Zntq" className = "d-block text-white">
              г.Бишкек, Кыргызстан
            </Link>
              <Link to="https://goo.gl/maps/3irVhq4Zntq">
                service@gmail.com
              </Link>
          </div>
          <div class="footer-copyright py-3">Copyright © 2019</div>
        </div>
        </footer>
    );
  }
}

export default Footer;
