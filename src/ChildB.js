import React from "react";
import ChildC from "./ChildC";

const ChildB = ({ data }) => {
  return (
    <div>
      ChildB
      <ChildC data={data} />
    </div>
  );
};

export default ChildB;
