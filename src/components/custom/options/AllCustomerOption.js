import React from "react";
import CustomerContext from "../../../contexts/custom/CustomerContext";
import CustomerOptions from "./CustomerOptions";

const AllCustomerOptions = (props) => {
  let { items } = CustomerContext.useContext();

  return <CustomerOptions values={items} />;
};

export default AllCustomerOptions;
