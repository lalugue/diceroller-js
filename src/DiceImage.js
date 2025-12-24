import React from "react";
import PropTypes from "prop-types";
import imgdice0 from "./assets/dice_0.svg";
import imgdice1 from "./assets/dice_1.svg";
import imgdice2 from "./assets/dice_2.svg";
import imgdice3 from "./assets/dice_3.svg";
import imgdice4 from "./assets/dice_4.svg";
import imgdice5 from "./assets/dice_5.svg";
import imgdice6 from "./assets/dice_6.svg";

const images = [
  imgdice0,
  imgdice1,
  imgdice2,
  imgdice3,
  imgdice4,
  imgdice5,
  imgdice6,
];

export default function DiceImage(props) {
  const { diceValue } = props;
  return (
    <img
      src={images[diceValue]}
      className="App-logo"
      alt={`dice ${diceValue}`}
    />
  );
}

DiceImage.propTypes = {
  diceValue: PropTypes.number,
};
