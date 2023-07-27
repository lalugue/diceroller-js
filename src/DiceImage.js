import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgdice0 from './assets/dice_0.svg'
import imgdice1 from './assets/dice_1.svg'
import imgdice2 from './assets/dice_2.svg'
import imgdice3 from './assets/dice_3.svg'
import imgdice4 from './assets/dice_4.svg'
import imgdice5 from './assets/dice_5.svg'
import imgdice6 from './assets/dice_6.svg'

let images = [imgdice0, imgdice1, imgdice2,imgdice3,imgdice4,imgdice5,imgdice6];

//a text component for testing purposes
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

  DiceImage.propTypes = {
    imgsrc: PropTypes.number,
  }

export default DiceImage;