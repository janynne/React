import React, { Component } from 'react';
import './App.css';
import Header from './header';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name:"janynne"
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.setState({
      name:"marcelo"
    })
  }
  handleClick = (event,txt) => {
    //event.preventDefault();
    event.stopPropagation();
    console.log(event);
    this.setState({
      name: txt
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <h1>{this.state.name}</h1>
        <input onChange={(event) => this.setState({name: event.target.value})} value={this.state.name}/>
        <button onClick={(event) => this.handleClick(event,"elcir")} >Change to Elcir</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
