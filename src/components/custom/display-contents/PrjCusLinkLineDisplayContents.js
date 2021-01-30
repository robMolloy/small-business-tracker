const PrjCusLinkLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return `${values.pcl_cus_id} ${values.pcl_prj_id}`;
};

export default PrjCusLinkLineDisplayContents;
