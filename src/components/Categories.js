import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import User from "./User";
// import userPhoto from "../img/user.svg"

import "./styles/Categories.css";

class Categories extends Component {
  render() {
    return <div className="Categories" style={{"display": "flex", "flexWrap": "wrap"}}>
        <div class="blocks col-6">
        <img class="category-img" src="https://media-cdn.tripadvisor.com/media/photo-s/0f/6c/f2/49/caption.jpg" alt="res" />
        </div>
        <div class="blocks col-6">
          <img class="category-img" src="https://media-cdn.tripadvisor.com/media/photo-s/10/a4/fd/0b/andronis-boutique-hotel.jpg" alt="hot" />
        </div>
        <div class="blocks col-6">
        <img class="category-img" src="https://cdn.pixabay.com/photo/2017/06/06/09/22/waitress-2376728_960_720.jpg" alt="res" />
        </div>
        <div class="blocks col-6">
          <img class="category-img" src="https://as1.ftcdn.net/jpg/01/01/07/66/500_F_101076659_ZxQLSZHt01sSg0U4g6JjR1s21B2nMPGl.jpg" alt="hot" />
        </div>
        <div class="blocks col-6">
        <img class="category-img" src="https://s26552.pcdn.co/wp-content/uploads/2017/11/supra.jpeg" alt="res" />
        </div>
        <div class="blocks col-6">
          <img class="category-img" src="https://supara.kg/wp-content/uploads/2017/06/7.yurt-big-05-600x400.jpg" alt="hot" />
        </div>
    </div>;
  }
}

export default Categories;
