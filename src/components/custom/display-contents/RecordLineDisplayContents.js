const RecordLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return ` ${values.rec_timestamp_planned_start} ${values.rec_duration_qty} ${values.rec_duration_unit} ${values.rec_total}`;
};

export default RecordLineDisplayContents;
