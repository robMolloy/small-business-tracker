import React from "react";
import GridItem from "../../generic/grids/GridItem";
import PhoneIcon from "../../generic/icons/PhoneIcon";
import EmailIcon from "../../generic/icons/EmailIcon";

const iconSelector = { phone: PhoneIcon, email: EmailIcon };

const ContactLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return (
    <>
      <GridItem xs={2}>{iconSelector[values.con_type]}</GridItem>
      <GridItem xs={3}>{values.con_method}</GridItem>
      <GridItem xs={3}>{values.con_address}</GridItem>
      <GridItem xs={4}> </GridItem>
    </>
  );
};

export default ContactLineDisplayContents;
