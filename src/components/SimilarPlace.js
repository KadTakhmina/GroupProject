import React, { Component } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

import './styles/var.css';
import './styles/SimilarPlace.css';

class SimilarPlace extends Component {
  render() {
    return (
      <div className  = "container">
        <div className="row SimilarPlace ">
        <div className = "col col-lg-3 col-md-3 col-6 similarCards">
            <img className = "img-fluid" alt = "similars"
                 src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
            <Rater total={5} rating={3} interactive={false}>
				    </Rater>
            <p className = "similar-place-name">"Similar Restaurant"</p>
        </div>
        <div className = "col col-lg-3 col-md-3 col-6 similarCards">
            <img className = "img-fluid" alt = "similars"
                 src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
            <Rater total={5} rating={3} interactive={false}>
				    </Rater>
            <p className = "similar-place-name">"Similar Restaurant"</p>
        </div>
        <div className = "col col-lg-3 col-md-3 col-6 similarCards">
            <img className = "img-fluid" alt = "similars"
                 src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
            <Rater total={5} rating={3} interactive={false}>
				    </Rater>
            <p className = "similar-place-name">"Similar Restaurant"</p>
        </div>
        <div className = "col col-lg-3 col-md-3 col-6 similarCards">
            <img className = "img-fluid" alt = "similars"
                 src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
            <Rater total={5} rating={3} interactive={false}>
				    </Rater>
            <p className = "similar-place-name">"Similar Restauran"</p>
        </div>
        
        
      </div>
      </div>
      
    );
  }
}

export default SimilarPlace;
