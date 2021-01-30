const ProjectLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return `${values.prj_address_1} ${values.prj_acronym}`;
};

export default ProjectLineDisplayContents;
