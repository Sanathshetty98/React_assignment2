import React, { Component } from 'react';
import './App.css';
import Validation from  './Validation/Validation';
import Char from  './Validation/CharComp';
class App extends Component {

  state= {
    userInput: ''
  }

  
  changedHandler = (event) => {
    this.setState({userInput : event.target.value})
  }

  deleteHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedtext = text.join('');
    this.setState({ userInput : updatedtext})
  }
  render() {
    const charList = this.state.userInput.split('').map((ch,index) => 
    {
      return <Char character={ch} 
      key={index} 
      clicked={() => this.deleteHandler(index)}
      />;
    })

    return (
      <div className="App">
        <input type="text" 
        onChange={this.changedHandler} 
        value = {this.state.userInput}
        />
        <p> {this.state.userInput} </p>
        <Validation userLength = {this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
