import PhoneIcon from "../../generic/icons/PhoneIcon";
import EmailIcon from "../../generic/icons/EmailIcon";
import GridItem from "../../generic/grids/GridItem";

const iconSelector = { phone: PhoneIcon, email: EmailIcon };

const ContactLineDisplayContents = (props) => {
  let values, type;
  ({ values, type = "string" } = props);

  const Icon = iconSelector[values.con_type];
  let rtn;

  switch (type) {
    case "string":
      rtn = `${values.con_method} ${values.con_address}`;
      break;
    case "component":
      rtn = (
        <>
          <Icon />
          <span>{`${values.con_method} ${values.con_address}`}</span>
        </>
      );
      break;
    case "grid":
      rtn = (
        <>
          <GridItem xs={4}>
            <Icon />
          </GridItem>
          <GridItem xs={4}>{values.con_method}</GridItem>

          <GridItem xs={4}>{values.con_address}</GridItem>
        </>
      );
      break;

    default:
      break;
  }
  return rtn;
};

export default ContactLineDisplayContents;
