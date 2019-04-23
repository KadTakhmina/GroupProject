import React, { Component } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import PT from "prop-types";

import './styles/var.css';
import './styles/SimilarPlace.css';

class SimilarPlace extends Component {
  render() {
    const {results} = this.props;
    const similar = results.slice(0,4).map(i => 
      {
        
      return(
      <div key = {i.id} className = "col col-lg-3 col-md-3 col-6 similarCards">
       <img className = "img-fluid" alt = "similars" src = {i.album[0]}/>
       <div className="flexText">
         <Rater className="stars" total={5} rating={i.raiting} interactive={false}>
           </Rater>
         <p className = "similar-place-name">{`"${i.name}"`}</p>
        </div>
      </div>
      );
    });
    return (
      <div className  = "container similar">
      <p className="title">Похожие на этот</p>
        <div className="row SimilarPlace ">
        
        {similar}
      </div>
      </div>
      
    );
  }
}


SimilarPlace.propTypes = {
  results: PT.array.isRequired,
}

export default SimilarPlace;
