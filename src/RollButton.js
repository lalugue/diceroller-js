import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

class RollButton extends Component {
  constructor(props) {
    super(props);
  }

  roll() {
    alert("Great roll!");
  }

  render() {
    return (
      <Button color="green" onClick={this.props.setDice}>
        Roll Dice
      </Button>
    );
  }
}

RollButton.propTypes = {
  setDice: PropTypes.function,
};

export default RollButton;
