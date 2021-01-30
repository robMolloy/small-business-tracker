import React from "react";
import ProjectLineDisplayContents from "../display-contents/ProjectLineDisplayContents";
import ItemList from "../../generic/lists/ItemList";

const ProjectList = (props) => {
  let values, Container;
  ({ values, Container = React.Fragment } = props);

  return (
    <ItemList
      {...{ values, Container, Component: ProjectLineDisplayContents }}
    />
  );
};

export default ProjectList;
