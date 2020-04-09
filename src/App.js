import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DummyText from './DummyText';
import RollButton from './RollButton'


//const RollButton = () => <Button color='facebook' onClick={()=>this.props.setText()}>Roll Dice</Button>
let DiceImage = () => <img src={logo} className="App-logo" alt="logo" />

class App extends Component {

 
constructor(props){
      super(props);      
      this.state={
        text:'foo',
        title:'Roll the dice!'
      }
    }

setDice = () => {
  let number = Math.random() * 6;
  number = Math.ceil(number)
  //checker in case the value is 0
  //for now, just set value to 1
  if(number === 0)
  {
    number = 1
  } 
  this.setState({title:number})
}

setDiceImage = (num) =>
{

}
   


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <DiceImage/>        
        <DummyText title={this.state.title}/>
        <RollButton setDice={this.setDice.bind(this)}/>
      </header>
      
    </div>
  );
  }
}



export default App;
