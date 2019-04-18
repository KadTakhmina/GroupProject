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
              <h5>О нас</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <Link to="/" class="text-white" >
                    O сервисе
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    O нас
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Материалы
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              <h5>Контакты</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <Link to="/" class="text-white">
                    Наша команда
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Что мы делаем
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Больше
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Новости
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              <h5>Карта</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <Link to="/" class="text-white">
                    Карта
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Поиск
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Новости
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              <h5>Заведения</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <Link to="/" class="text-white">
                    Рестораны
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Отели
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Курсы
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-white">
                    Подробнее
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
            <Link to="https://goo.gl/maps/3irVhq4Zntq">
              г.Бишкек, Кыргызстан
            </Link>
            <br />
            <div class="footer-gmail">
              <Link to="https://goo.gl/maps/3irVhq4Zntq">
                service@gmail.com
              </Link>
              <br />
            </div>
          </div>
          <hr class="my-4" />
          <div class="footer-copyright py-3">Copyright © 2019</div>
        </div>
        </footer>
    );
  }
}

export default Footer;
