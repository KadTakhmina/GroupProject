import React, { Component } from 'react';


import Button from "./Button";
import './styles/var.css';
import './styles/Heading.css';


class Heading extends Component {
  render() {
    return (
      <div className="Heading container col-12">
      <h1>Heading</h1>
      <p>Lorem mvksm fndjsfn vdkfm vdskvn sdkfsk cskdf
          mdkmc dslkvm sdkvmksdmvksdmgf vksdmvs vmdksmvlskd vmdskl
          mvdsklvmskdlmvk s dmkm mkvmsd kmvksdmvkd mkvdmskvsd vmdksmvlskd
          ,vdslvsdm cskm cmdkmsd vmdk dkmfs cvkdsdkmvksdmsfdmvmds vdksv 
      </p>
      
      <button class="btn btn-primary">Click</button>
      </div>
    );
  }
}

export default Heading;
