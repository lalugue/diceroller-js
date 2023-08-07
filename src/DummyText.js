import React, { Component } from "react";

class DummyText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.title}</p>;
  }
}

export default DummyText;
