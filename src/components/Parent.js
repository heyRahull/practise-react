import React, { createContext } from "react";
import ChildA from "./ChildA";
const data = createContext();
const data1 = createContext();
const Parent = () => {
  const name = "rahul";
  const tech = "ReactJs";

  return (
    <div>
      Parent
      <data.Provider value={name}>
        <data1.Provider value={tech}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default Parent;
export { data, data1 };
