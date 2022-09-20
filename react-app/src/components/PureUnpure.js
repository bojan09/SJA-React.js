// States
import { useState } from "react";

// components
import { Pure } from "./Pure";
import { Unpure } from "./Unpure";

export const PureUnpure = () => {
  const [bool, setBool] = useState(false);
  return (
    <div>
      <Pure isAvailabe />
      <Unpure number={12} />

      <button onClick={() => setBool((prev) => !prev)}>Change Boolean</button>
      <p> {bool ? "yes" : "no"} </p>
    </div>
  );
};
