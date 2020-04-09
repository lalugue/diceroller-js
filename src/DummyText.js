import React, { Component } from 'react';


class DummyText extends Component {
  constructor(props){
    super(props);
    this.state=
    {text:"this is initial state"}
    console.log("this is props:")
    console.log(this.props)
  }
  
    render() {
      return (
        <p>
          {this.props.title}              
        </p>
        
        
      );
    }
  }

export default DummyText;