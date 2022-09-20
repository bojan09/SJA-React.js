import { memo } from "react";

export const Pure = memo(({ isAvailabe }) => {
  console.log("Pure");
  return (
    <div>
      <p>isAvailabe : {isAvailabe ? "yes" : "no"}</p>
    </div>
  );
});
