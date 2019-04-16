import React, { Component } from 'react';
import  "./styles/Footer.css";
import {Link} from "react-router-dom";

class Footer extends Component {
 render() {
   return (
     <div className="Footer">
    
<footer class="container py-5">
 <div class="row">
   <div class="col-12 col-md">
      <h5>О нас</h5>
     <ul class="list-unstyled text-small">
     <li><Link to="/"class="text-muted">O сервисе</Link></li>
     <li><Link to="/"class="text-muted">O нас</Link></li>
     <li><Link to="/"class="text-muted">Контакты</Link></li>
     <li><Link to="/"class="text-muted">Материалы</Link></li>
     </ul>
   </div>
   <div class="col-6 col-md">
     <h5>Контакты</h5>
     <ul class="list-unstyled text-small">
       <li><Link to="/"class="text-muted">Наша команда</Link></li>
       <li><Link to="/"class="text-muted">Что мы делаем</Link></li>
       <li><Link to="/"class="text-muted">Больше</Link></li>
       <li><Link to="/"class="text-muted">Новости</Link></li>
     </ul>
   </div>
   <div class="col-6 col-md">
     <h5>Карта</h5>
     <ul class="list-unstyled text-small">
     <li><Link to="/"class="text-muted">Карта</Link></li>
     <li><Link to="/"class="text-muted">Поиск</Link></li>
     <li><Link to="/"class="text-muted">Новости</Link></li>
     <li><Link to="/"class="text-muted">Контакты</Link></li>
     </ul>
   </div>
   <div class="col-6 col-md">
     <h5>Заведения</h5>
     <ul class="list-unstyled text-small">
     <li><Link to="/"class="text-muted">Рестораны</Link></li>
     <li><Link to="/"class="text-muted">Отели</Link></li>
     <li><Link to="/"class="text-muted">Курсы</Link></li>
     <li><Link to="/"class="text-muted">Подробнее</Link></li>
     </ul>
   </div>
   {/* <div class="col-6 col-md">       */}
   {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
     <small class="d-block mb-3 text-muted">© 2017-2019</small> */}
   {/* </div> */}
     </div>
     <br/>
         <Link to="/"><img class="footer-img" alt="icon" src="https://image.flaticon.com/icons/svg/145/145802.svg" /></Link>
         <Link to="/"><img class="footer-img" alt="icon" src="https://image.flaticon.com/icons/svg/145/145812.svg" /></Link>
         <Link to="/"><img class="footer-img" alt="icon" src="https://image.flaticon.com/icons/svg/145/145807.svg" /></Link>
         <Link to="/"><img class="footer-img" alt="icon" src="https://image.flaticon.com/icons/svg/145/145813.svg" /></Link>
         <br/>
         <br/>
         <br/>
         <div class="footer-address">
         <Link to="https://goo.gl/maps/3irVhq4Zntq">мкнр Асанбай, дом 8/1, кв 46, г.Бишкек, Кыргызстан </Link><br/>
         <div class="footer-gmail">
         <Link to="https://goo.gl/maps/3irVhq4Zntq">service@gmail.com</Link><br/>
         </div>
         </div>
         <hr class="my-4"/>
     <div class="footer-copyright py-3">Copyright © 2017-2019</div>
 
</footer>
     </div>
   );
 }
}

export default Footer;