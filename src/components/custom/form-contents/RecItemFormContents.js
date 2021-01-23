import createFormHelper from "../../../classes/createFormHelper";

import GridInput from "../../generic/grids/GridInput";
import { useForm } from "react-hook-form";

// rci_id: "",
//   rci_usr_id: "",
//   rci_rec_id: "",
//   rci_work: "",
//   rci_unit: "",
//   rci_qty: "",
//   rci_cost_per_unit: "",
//   rci_total: "",

const RecItemFormContents = (props = {}) => {
  let formControls, values, width;
  ({ formControls, values, width = 12 } = props);

  formControls = useForm();
  const formHelper = createFormHelper({ formControls, values });

  return (
    <>
      <GridInput
        grid={{ xs: width - 5 }}
        {...formHelper.fieldProps("whatever")}
      />
    </>
  );
};

export default RecItemFormContents;
