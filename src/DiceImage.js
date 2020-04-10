import React, { Component } from 'react';
import logo from './logo.svg'
import imgdice from './assets/dice_1.svg'


class DiceImage extends Component {
  constructor(props){
    super(props);
    //this.state=
    //{imgsrc=this.props.imgsrc}
    
  }
  
    render() {
      return (
       
        <img src={imgdice} className="App-logo" alt="logo" />
        
      );
    }
  }

export default DiceImage;