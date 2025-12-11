import React from "react";
import PropTypes from "prop-types";

export default function DiceText(props) {
  const { title } = props;

  return <p>{title}</p>;
}

DiceText.propTypes = {
  title: PropTypes.string,
};
