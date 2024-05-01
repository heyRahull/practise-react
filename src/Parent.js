import React from "react";
import ChildA from "./ChildA";

const Parent = () => {
  const name = "rahul";

  return (
    <div>
      <ChildA data={name} />
    </div>
  );
};

export default Parent;
