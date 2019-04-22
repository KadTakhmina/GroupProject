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
      btn: "instagram",
    }
  }
  render() {
    const {name,description} = this.props;
    return (
      <div className = "Description container">
        <div className=" row">
         <h3 className="col-lg-12 col-md-12 col-10  text-center ">{`"${name}"`}</h3>
         <div className="col-lg-12 col-md-12 col-12  DescriptionNav" >
            <Link className = "d-inline-block mx-2" to = "/">Описание</Link>
            <Link className = "d-inline-block mx-2" to = "/">Отзывы</Link>
            <Link className = "d-inline-block mx-2" to = "/"><Button val = {this.state.btn}/></Link>
         </div>
         <p className = "col-lg-12 col-md-12 col-10 text">{description}</p>
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
