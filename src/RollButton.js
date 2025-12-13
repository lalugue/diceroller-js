import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

export default function RollButton(props) {
  const { setDice } = props;

  return (
    <Button color="green" onClick={setDice}>
      Roll Dice
    </Button>
  );
}

RollButton.propTypes = {
  setDice: PropTypes.function,
};
