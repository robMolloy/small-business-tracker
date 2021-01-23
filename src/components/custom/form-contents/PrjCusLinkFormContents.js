import GridSelect from "../../generic/grids/GridSelect";
import createFormHelper from "../../../classes/createFormHelper";

import { useForm } from "react-hook-form";

const PrjCusLinkFormContents = (props = {}) => {
  let formControls, values;
  ({ formControls, values } = props);

  formControls = useForm();
  const formHelper = createFormHelper({ formControls, values });

  const customerOptions = [];
  const projectOptions = [];

  return (
    <>
      <GridSelect
        autoFocus
        label="Project"
        {...formHelper.fieldProps("pcl_prj_id")}
      >
        {projectOptions}
      </GridSelect>
      <GridSelect label="Customer" {...formHelper.fieldProps("pcl_cus_id")}>
        {customerOptions}
      </GridSelect>
    </>
  );
};

export default PrjCusLinkFormContents;
