import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    };
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.name}{' '}{this.state.task}{' '}
        </p>
        <p style = {{textDecoration:                
                  this.state.IsIntern? 'none':'line-through'             
                
                }}>Intern</p>
        <button onClick = {() => {
             fetch('http://localhost:5000/getData')
              .then(res => res.json())
              .catch(err => console.log(err))
              .then(data => this.setState({users:data}));
        }}>getdata</button>

      <button onClick = {() => {
             axios.post('http://localhost:5000/postData')
              .catch(err => console.log(err));
        }}>postdata</button>
      </div>
    );
  }
}

export default App;
