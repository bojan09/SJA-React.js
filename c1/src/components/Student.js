// we are destructuring the object from App.js

const Student = ({ student: { name, lastName, age, email } }) => {
  return (
    <div>
      <h3>Functional Component</h3>
      <p>Name: {name}</p>
      <p>Lastname: {lastName}</p>
      <p>Age:{age}</p>
      <p>Email:{email}</p>
    </div>
  );
};

export default Student;
