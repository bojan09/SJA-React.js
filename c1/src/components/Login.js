import { useState, useEffect } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("rerendering");

  useEffect(() => {
    console.log("password has changed");
  }, [password]);

  return (
    <div>
      <center>
        <br />
        <label htmlFor="">Username </label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <span> {username}</span>

        <br />
        <br />
        <label htmlFor="">Password </label>
        <input
          type="text"
          placeholder="Enter username"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span> {password}</span>
        <button
          onClick={() => {
            setUsername("John");
            setPassword("JhonnyBoii");
          }}
        >
          Change Both
        </button>
      </center>
    </div>
  );
};
