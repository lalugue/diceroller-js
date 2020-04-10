import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';


class RollButton extends Component {
  constructor(props){
    super(props);
    
  }

  roll() {
    alert("Great roll!");    
  }
  
    render() {
      return (
        <Button color='green' onClick={this.props.setDice}>Roll Dice</Button>       
        
      );
    }

    

  }

export default RollButton;