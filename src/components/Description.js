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
      <div className = "Description container">
        <div className="row">
         <h3 className="col-lg-12 col-md-12 col-10  text-center ">{`"${name}"`}</h3>
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
