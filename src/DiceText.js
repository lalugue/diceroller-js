import React, { Component } from "react";
import PropTypes from "prop-types";

class DiceText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.title}</p>;
  }
}

DiceText.propTypes = {
  title: PropTypes.string,
};

export default DiceText;
