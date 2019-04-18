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
      btn: "Заказать",
    }
  }
  render() {
    const {name,description} = this.props;
    return (
      <div className = "Description container">
        <div className=" row">
         <h3 className="col col-lg-12  ">{`"${name}"`}</h3>
         <div className="col col-lg-12 DescriptionNav" >
            <Link className = "d-inline-block mx-2" to = "/">Описание</Link>
            <Link className = "d-inline-block mx-2" to = "/">Отзывы</Link>
            <Button val = {this.state.btn}/>
         </div>
         <p className = "col-12 text-center">{description}</p>
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
