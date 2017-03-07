import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {

  constructor() {

    super();
    this.state = {
      name: 'Brett',
      title: 'Groceries',
      items: ['bananas', 'bread', 'butter', 'More Butter']
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    console.log('Clicked!');
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p onClick={this.handleClick} className="App-intro">
          Hello {this.state.name}!
        </p>

        <input onChange={this.handleChange}/>
        <List title={this.state.title} items ={this.state.items}/>
        <List title="Chores" items ={this.state.items}/>
      </div>
    );
  }
}

export default App;
