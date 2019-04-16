import React, { Component } from 'react';

import './styles/var.css';
import './styles/RaitingStar.css';

class RaitingStar extends Component {
  render() {
    return (
      <div className="RaitingStar">
        <i class="far fa-star on"></i>
        <i class="far fa-star on"></i>
        <i class="far fa-star on"></i>
        <i class="far fa-star on"></i>
        <i class="far fa-star on"></i>
      </div>
    );
  }
}

export default RaitingStar;
