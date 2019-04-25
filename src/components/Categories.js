import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import User from "./User";
// import userPhoto from "../img/user.svg"

import "./styles/Categories.css";

class Categories extends Component {
  render() {
    return <div className="Categories" style={{"display": "flex", "flexWrap": "wrap"}}>
        <div class="blocks col-6">
        <img class="category-img" src="http://navat.com.kz/wp-content/uploads/2018/01/Navat-Almaty-16.jpg" alt="res" style={{"width":"100%"}} />
        </div>
        <div class="blocks col-6">
          <img class="category-img" src="http://www.orionbishkek.com/images/uploads/8279cbe95dc8101a3c6bffc532db6fe0.jpg" alt="hot" />
        </div>
        <div class="blocks col-6">
        <img class="category-img" src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/01/11/1725/Hyatt-Regency-Bishkek-P067-Exterior.jpg/Hyatt-Regency-Bishkek-P067-Exterior.4x3.jpg" alt="res" />
        </div>
        <div class="blocks col-6">
          <img class="category-img" src="https://i.mycdn.me/image?id=802956202454&t=0&plc=MOBILE&tkn=*gshcXQoMnMD_bLnwe5gx3C-lrPg" alt="hot" />
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
