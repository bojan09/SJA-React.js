import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementBy,
} from "../slices/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  return (
    <div>
      <p>Counter: {count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>increment +</button>
        <button onClick={() => dispatch(decrement())}>decrement -</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <div>
          <input type="number" ref={inputRef} />
          <button
            onClick={() => {
              const inputValue = inputRef.current.value;
              console.log("inputRef.current.value", inputValue);

              dispatch(incrementBy(inputValue));
            }}
          >
            incrementBy
          </button>
        </div>
      </div>
    </div>
  );
};
