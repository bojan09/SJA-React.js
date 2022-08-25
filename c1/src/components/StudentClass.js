import { Component } from "react";

export class StudentClass extends Component {
  render() {
    const { name, lastName, age, email } = this.props.student;
    return (
      <div>
        <h3>Class Component</h3>
        <p>Name: {name}</p>
        <p>Lastname: {lastName}</p>
        <p>Age:{age}</p>
        <p>Email:{email}</p>
      </div>
    );
  }
}

export default StudentClass;
