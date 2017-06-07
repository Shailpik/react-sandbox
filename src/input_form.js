import React, { Component } from 'react';

class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      age: 0
    };

  }

  handleChange(event) {
    var buffer = {};
    buffer[event.target.name] = event.target.value;
    this.setState(buffer);
  }

   jsonForm(e) {
      e.preventDefault();
       var entry = {
         first_name : this.state.first_name,
         last_name : this.state.last_name,
         age : parseInt(this.state.age, 10)
       };
       this.props.addUser(entry);
       this.setState({
         first_name: '',
         last_name: '',
         age: 0
       });
   }

  render() {
    return (
      <div className="InputForm">
        <form name="Entry"  onSubmit={(e) => this.jsonForm(e)} >
          First name: <input type="text" value = {this.state.first_name} onChange={(e) => this.handleChange(e)} name="first_name"/><br/>
          Last name: <input type="text" value = {this.state.last_name} onChange={(e) => this.handleChange(e)}  name="last_name"/><br/>
          Age: <input type="number" value = {this.state.age} onChange={(e) => this.handleChange(e)} name="age"/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>

    );
  }
}

export default InputForm;
