import React, { Component } from 'react';

class Table extends Component {

  handleChange(event, user) {
    user[event.target.name] = event.target.name === "age" ?  parseInt(event.target.value, 10) : event.target.value;
  }

  updateUser(user) {
      this.props.updateUser(user);
  }

  deleteUser(id){
    this.props.deleteUser(id);
  }

  render() {

    return (
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><input type="text" defaultValue = {user.first_name} onChange={(e) => this.handleChange(e, user)} name="first_name"/></td>
              <td><input type="text" defaultValue = {user.last_name} onChange={(e) => this.handleChange(e, user)} name="last_name"/></td>
              <td><input type="number" defaultValue = {user.age} onChange={(e) => this.handleChange(e, user)} name="age"/></td>
              <td><button onClick={(e) => this.deleteUser(user.id)}>x</button></td>
              <td><button onClick={(e) => this.updateUser(user)}>Update</button></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>

    );
  }
}

export default Table;
