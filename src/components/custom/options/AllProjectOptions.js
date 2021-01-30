import React from "react";
import ProjectContext from "../../../contexts/custom/ProjectContext";
import ProjectOptions from "./ProjectOptions";

const AllProjectOptions = (props) => {
  let { items } = ProjectContext.useContext();

  return <ProjectOptions values={items} />;
};

export default AllProjectOptions;
