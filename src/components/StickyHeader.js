import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './styles/var.css';
import './styles/StickyHeader.css';



class StickyHeader extends Component {

  render() {
    return (
      <div className="col-12  StickyHeader">
          <nav class="navbar navbar-expand-lg navbar-light headerMenu ">
             <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <Link class="nav-link" to= "/">Отели <span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/restaurants">Рестораны</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Развлечения </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Услуги</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Курсы</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Еще
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <Link class="dropdown-item" to="/">Action</Link>
                      <Link class="dropdown-item" to="/">Another action</Link>
                      <Link class="dropdown-item" to="/">Something else here</Link>
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
