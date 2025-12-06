import React, { Component } from "react";
import "./App.css";
import DiceText from "./DiceText";
import RollButton from "./RollButton";
import DiceImage from "./DiceImage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Roll the dice!",
      imgsrc: 0,
    };
  }

  setDice = () => {
    let number = Math.random() * 6;
    number = Math.ceil(number);
    //checker in case the value is 0
    //in this case, set value to 1
    if (number === 0) {
      number = 1;
    }
    this.setState({ title: number });
    this.setDiceImage(number);
  };

  setDiceImage = (num) => {
    this.setState({ imgsrc: num });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DiceImage imgsrc={this.state.imgsrc} />
          <DiceText title={this.state.title} />
          <RollButton setDice={this.setDice.bind(this)} />
        </header>
      </div>
    );
  }
}

export default App;
