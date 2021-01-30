const CustomerLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return `${values.cus_first_name} ${values.cus_last_name}`;
};

export default CustomerLineDisplayContents;
