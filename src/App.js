import React, { useState } from "react";
import "./App.css";
import DiceText from "./DiceText";
import RollButton from "./RollButton";
import DiceImage from "./DiceImage";

function App() {
  const [title, setTitle] = useState("Roll the dice!");
  const [diceValue, setDiceValue] = useState(0);

  const setDice = () => {
    let number = Math.random() * 6;
    number = Math.ceil(number);
    //checker in case the value is 0
    //in this case, set value to 1
    if (number === 0) {
      number = 1;
    }
    setTitle(number);
    setDiceValue(number);
  };

  return (
    <div className="App">
      <header className="App-header">
        <DiceImage diceValue={diceValue} />
        <DiceText title={title} />
        <RollButton setDice={setDice} />
      </header>
    </div>
  );
}

export default App;
