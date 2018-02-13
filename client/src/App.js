import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserList from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    };
  }

  fetchUsers(){
    fetch('http://localhost:5000/getData')
              .then(res => res.json())
              .catch(err => console.log(err))
              .then(data => this.setState({users:data}));
  }

  componentDidMount() {
    this.fetchUsers();
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-to-MongoDB</h1>
        </header>
      
        <button onClick = {() => {
          this.fetchUsers();
        }}>getdata</button>

      <button onClick = {() => {
             axios.post('http://localhost:5000/postData')
              .then(res => this.setState({users: [...this.state.users,res.data]}))
              .catch(err => console.log(err));
        }}>postdata</button>

        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
