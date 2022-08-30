import React from "react";
import { useState } from "react";
import { Input } from "./components/common/Input";

const App = () => {
  const [fieldType, setFieldType] = useState("password");

  const onMouseDownHandler = () => {
    setFieldType("text");
  };

  const onMouseUpHandler = () => {
    setFieldType("password");
  };
  return (
    <div className="App">
      <Input
        name="password"
        type={fieldType}
        mouseDown={onMouseDownHandler}
        mouseUp={onMouseUpHandler}
      />
    </div>
  );
};

export default App;
