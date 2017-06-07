import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './table';
import InputForm from './input_form';
import ShowError from './error';
import Api from './api';
import _ from 'lodash';
// import { FormElement as X, Y } from '@ux/uxcore2';

const api = new Api();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      error: null
    };

  }

  componentDidMount() {

     api.getUsers((err, users) => {
       this.setState({
         users: users,
         error: err
       })
     });

   }

   addUser(user) {
     api.addUser(user, (err, user) => {
       let users = this.state.users;
       if(!err) {
         users.push(user);
       }
       this.setState({
         users: users,
         error: err
       });
     });
   }

   deleteUser(user_id) {
     api.deleteUser(user_id, (err, user) => {
       let users = this.state.users;
       if(!err) {
         let user_index = _.findIndex(users, function(o) { return o.id === user_id; });
         users.splice(user_index, 1);
       }
       this.setState({
         users: users,
         error: err
       });
     });
   }

   updateUser(user) {
     api.updateUser(user, (err, user) => {
       let users = this.state.users;
       if(!err) {
         let user_index = _.findIndex(users, function(o) { return o.id === user.id; });
         users[user_index].first_name = user.first_name;
         users[user_index].last_name = user.last_name;
         users[user_index].age = user.age;
       }
       this.setState({
         users: users,
         error: err
       });
     });
   }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my crud project</h2>
        </div>
        <Table users={this.state.users} updateUser={(user_id, user) => this.updateUser(user_id, user)} deleteUser={(user_id) => this.deleteUser(user_id)}/>
        <InputForm parent={this} addUser={(user) => this.addUser(user)}/>
        <ShowError error={this.state.error}/>
      </div>

    );
  }
}

export default App;
