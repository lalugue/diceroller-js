import React, { Component } from "react";

class DiceText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.title}</p>;
  }
}

export default DiceText;
