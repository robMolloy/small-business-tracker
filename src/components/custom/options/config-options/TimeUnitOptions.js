import config from "../../../../config";
import Option from "../../../generic/fields/Option";

import l_ from "lodash";

const TimeUnitOptions = () => {
  const timeUnits = config.timeUnits;

  return timeUnits.map((value) => (
    <Option {...{ key: value, value }}>{l_.upperFirst(value)}</Option>
  ));
};

export default TimeUnitOptions;
