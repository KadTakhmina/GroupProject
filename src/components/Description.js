import React, { Component } from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";
import PT from "prop-types";

import './styles/var.css';
import './styles/Description.css';


class Description extends Component {
  constructor() {
    super();
    this.state = {
      btn: "Описание",
    }
  }
  render() {
    const {name,description} = this.props;
    return (
      <div className = "Description row ">
        <div className="bcg col-lg-12 col-md-12 col-12">
           <img src="http://static1.squarespace.com/static/54f8550fe4b01ba4126c193c/59b0e3ba37c581cec3c9c2f2/5b951547cd83660363de42c6/1536771340505/corfu-banner.jpg?format=1500w"/>
           <div className="coverBcg"></div>
        </div>
          <div className="container">
        
           
         <h1 className="col-lg-12 col-md-12 col-10  text-center ">{`${name}`}</h1>
         <div className="col-lg-12 col-md-12 col-12  DescriptionNav" >
            <Link className = "d-inline-block mx-2" to = "/"><Button val = {this.state.btn}/></Link>
            <Link className = "d-inline-block mx-2" to = "/">Отзывы</Link>
            <a className = "d-inline-block mx-2" href = "https://www.instagram.com/marioristorante/">Instagram</a>
         </div>
         <div className = "textAbout col-lg-12 col-md-12 col-12">{description}</div>
        </div>
      </div>
      
    );
  }
}

Description.propTypes = {
  name: PT.string.isRequired,
  description: PT.string.isRequired,
}


export default Description;
