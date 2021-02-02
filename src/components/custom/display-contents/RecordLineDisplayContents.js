import normalizeCurrency from "../../../functions/normalizeCurrency";
import getLocaleDateString from "../../../functions/getLocaleDateString";

const RecordLineDisplayContents = (props) => {
  let values;
  ({ values } = props);
  console.log(values);

  return `${getLocaleDateString(values.rec_timestamp_planned_start)} ${
    values.rec_duration_qty
  } ${values.rec_duration_unit} ${normalizeCurrency(values.rec_total, true)}`;
};

export default RecordLineDisplayContents;
