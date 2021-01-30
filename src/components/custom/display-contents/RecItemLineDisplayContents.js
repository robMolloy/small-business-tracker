const RecItemLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return `${values.rci_work} ${values.rci_total}`;
};

export default RecItemLineDisplayContents;
