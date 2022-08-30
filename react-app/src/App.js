import React, { useEffect } from "react";
import { useState } from "react";
import { Input } from "./components/common/Input";

const App = () => {
  const [fieldType, setFieldType] = useState("password");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log("Comment was changed to ", comment);
  }, [comment]);

  const onMouseDownHandler = () => {
    setFieldType("text");
  };

  const onMouseUpHandler = () => {
    setFieldType("password");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password, comment);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <Input
        placeholder="Enter your password"
        name="password"
        type={fieldType}
        mouseDown={onMouseDownHandler}
        mouseUp={onMouseUpHandler}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Input
        type="text"
        placeholder="Enter your comment"
        name="comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <br />

      <button type="button" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default App;
