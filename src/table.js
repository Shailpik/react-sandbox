import React, { Component } from 'react';

class Table extends Component {

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
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.age}</td>
              <td><button onClick={(e) => this.deleteUser(user.id)}>x</button></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>

    );
  }
}

export default Table;
