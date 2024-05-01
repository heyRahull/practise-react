import React, { useContext } from "react";
import { data, data1 } from "./Parent";

const ChildC = () => {
  const name = useContext(data);
  const technology = useContext(data1);
  return (
    <h1>
      My name is {name} and we are learning {technology}
    </h1>
  );
};

export default ChildC;
