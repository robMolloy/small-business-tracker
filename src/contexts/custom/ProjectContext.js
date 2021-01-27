import React from "react";
import ContextProvider from "../ContextProvider";

const ProjectContext = React.createContext();

export const ProjectContextProvider = (props) => {
  return (
    <ContextProvider Context={ProjectContext} itemType="project" {...props} />
  );
};

export default ProjectContext;
