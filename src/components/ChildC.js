import React from "react";
import { data, data1 } from "./Parent";

const ChildC = () => {
  return (
    <data.Consumer>
      {(name) => {
        return (
          <data1.Consumer>
            {(tech) => {
              return (
                <h1>
                  My name is {name} and tech is {tech}
                </h1>
              );
            }}
          </data1.Consumer>
        );
      }}
    </data.Consumer>
  );
};

export default ChildC;
