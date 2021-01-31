import React from "react";
import ContactContext from "../../../../contexts/custom/single-contexts/ContactContext";
import ContactOptions from "./ContactOptions";

const AllContactOptions = (props) => {
  let { items } = ContactContext.useContext();

  return <ContactOptions values={items} />;
};

export default AllContactOptions;
