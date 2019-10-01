import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {
    user: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await Axios.get('https://api.github.com/users');

    this.setState({
      users: res.data,
      loading: false
    });
  }
  /*componentDidMount() {
    axios.get('https://api.github.com/users').then(res =>
      console.log(res.data)
    );
  }*/

  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
