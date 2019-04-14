import React, { Component } from 'react';
import './styles/var.css';
import './styles/Stycky.css';



class StickyHeader extends Component {

  render() {
    return (
      <div className="col-12 ">
          <nav class="navbar navbar-expand-lg navbar-light headerMenu StickyHeader">
             <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Отели <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Рестораны</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Развлечения</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Услуги</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Курсы</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Еще
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
             </div>
           </nav>
        
      </div>
    );
  }
}

export default StickyHeader;
