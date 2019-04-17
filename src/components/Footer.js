import React, { Component } from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      
        <footer className="Footer container py-5">
          <div class="row">
            <div class="col-12 col-md">
              <h5>О нас</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <Link to="/" class="text-muted">
                    O сервисе
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    O нас
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Материалы
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Контакты</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <Link to="/" class="text-muted">
                    Наша команда
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Что мы делаем
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Больше
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Новости
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Карта</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <Link to="/" class="text-muted">
                    Карта
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Поиск
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Новости
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Заведения</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <Link to="/" class="text-muted">
                    Рестораны
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Отели
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Курсы
                  </Link>
                </li>
                <li>
                  <Link to="/" class="text-muted">
                    Подробнее
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>
          <br />
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
          <br />
          <br />
          <br />
          <div class="footer-address">
            <Link to="https://goo.gl/maps/3irVhq4Zntq">
              мкнр Асанбай, дом 8/1, кв 46, г.Бишкек, Кыргызстан{" "}
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
          <div class="footer-copyright py-3">Copyright © 2019-2020</div>
        </footer>
    );
  }
}

export default Footer;
