import React from "react";

import GridSelect from "../../generic/grids/GridSelect";
import Option from "../../generic/fields/Option";

import createFormHelper from "../../../classes/createFormHelper";
import Schema from "../../../schemas/PrjCusLinkSchema";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomerContext from "../../../contexts/custom/single-contexts/CustomerContext";

const PrjCusLinkCustomerSelectFormContents = (props = {}) => {
  let formControls, values, width, schema;
  ({ formControls = {}, values = {}, width = 12, schema = Schema } = props);

  const { items: customers } = CustomerContext.useContext();

  const resolver = yupResolver(schema);
  Object.assign(
    formControls,
    useForm({ resolver, mode: "onChange", defaultValues: values })
  );

  const formHelper = createFormHelper({ formControls, values });

  const customerOptions = Object.entries(customers).map(([id, customer]) => (
    <Option key={id} value={id}>
      {`${customer.cus_first_name} ${customer.cus_last_name}`}
    </Option>
  ));

  return (
    <GridSelect
      grid={{ xs: width }}
      autoFocus
      label="Customer"
      {...formHelper.fieldProps("pcl_cus_id")}
    >
      {customerOptions}
    </GridSelect>
  );
};

export default PrjCusLinkCustomerSelectFormContents;
