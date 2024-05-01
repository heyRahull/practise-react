import React from "react";
import ChildB from "./ChildB";

const ChildA = ({ data }) => {
  return (
    <div>
      ChildA
      <ChildB data={data} />
    </div>
  );
};

export default ChildA;
