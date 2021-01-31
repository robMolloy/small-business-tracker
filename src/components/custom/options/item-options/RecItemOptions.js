import React from "react";
import ItemOptions from ".";
import ProjectLineDisplayContents from "../../display-contents/ProjectLineDisplayContents";

const ProjectOptions = (props) => {
  let values;
  ({ values } = props);

  return (
    <ItemOptions values={values} DisplayContents={ProjectLineDisplayContents} />
  );
};

export default ProjectOptions;
