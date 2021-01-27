import React from "react";
import ContextProvider from "./ContextProvider";

export const ProjectContext = React.createContext();

const ProjectContextProvider = () => {
  return <ContextProvider Context={Context} itemType="project" />;
};

export default ProjectContextProvider;
