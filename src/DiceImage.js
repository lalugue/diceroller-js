import React, { Component } from 'react';
import logo from './logo.svg'
import imgdice1 from './assets/dice_1.svg'
import imgdice2 from './assets/dice_2.svg'
import imgdice3 from './assets/dice_3.svg'
import imgdice4 from './assets/dice_4.svg'
import imgdice5 from './assets/dice_5.svg'
import imgdice6 from './assets/dice_6.svg'

let images = [logo, imgdice1, imgdice2,imgdice3,imgdice4,imgdice5,imgdice6];

class DiceImage extends Component { 

  constructor(props){
    super(props);  
    
  } 
    
    render() {
      return (
       
        <img src={images[this.props.imgsrc]} className="App-logo" alt="logo" />
        
      );
    }
  }

export default DiceImage;