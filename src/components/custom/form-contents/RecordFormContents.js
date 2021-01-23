import createFormHelper from "../../../classes/createFormHelper";
import GridInput from "../../generic/grids/GridInput";
import { useForm } from "react-hook-form";

const RecordFormContents = (props = {}) => {
  let formControls, values, width;
  ({ formControls, values, width = 12 } = props);

  formControls = useForm();
  const formHelper = createFormHelper({ formControls, values });

  return (
    <>
      <GridInput
        grid={{ xs: width - 5 }}
        {...formHelper.fieldProps("whatewr")}
      />
    </>
  );
};

export default RecordFormContents;
