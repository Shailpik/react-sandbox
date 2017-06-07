import axios from 'axios';

class Api {

  constructor() {
    const url = 'http://localhost:3000';
    axios.defaults.baseURL = url;
  }

  getUsers(callback) {
    axios.get('/user/')
      .then(result => {
        callback(null, result.data);
      }).catch(e => {
        console.error(e)
        callback("Failed to get users from the api", []);
      });
  }

  addUser(user, callback) {
    axios.post('/user/', user).then(results => {
      console.log(results.data);
      callback(null, results.data);
    }).catch(e => {
      console.error(e)
      callback("Failed to add user from the api")
    });
  }

  updateUser(user, callback) {
    axios.put('/user/' + user.id, user).then(results => {
      console.log(results.data);
      callback(null, results.data);
    }).catch(e => {
      console.error(e)
      callback("Failed to update user to the api")
    });
  }


  deleteUser(user_id, callback) {
    axios.delete('/user/' + user_id).then(results => {
      console.log(results.data);
      callback(null, user_id);
    }).catch(e => {
      console.error(e)
      callback("Failed to delete user from the api")
    });
  }

}

export default Api;
