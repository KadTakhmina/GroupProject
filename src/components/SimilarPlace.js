import React, { Component } from 'react';
import RaitingStar from './RaitingStar';

import './styles/var.css';
import './styles/SimilarPlace.css';

class SimilarPlace extends Component {
  render() {
    return (
      <div className="row SimilarPlace">
        <div className = "col col-lg-4 similar-place-info">
            <img className = "similar-place-img" alt = "AlText"
                 src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
            <RaitingStar/>
            <p className = "similar-place-name">"Another rest 1"</p>
        </div>
        <div className = "col col-lg-4 similar-place-info">
            <img className = "similar-place-img" alt = "AlText"
             src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
            <RaitingStar/>
            <p className = "similar-place-name">"Another rest 2"</p>
        </div>
        <div className = "col col-lg-4 similar-place-info">
            <img className = "similar-place-img" alt = "AlText"
             src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
            <RaitingStar/>
            <p className = "similar-place-name">"Another rest 3"</p>
        </div>

      </div>
    );
  }
}

export default SimilarPlace;
