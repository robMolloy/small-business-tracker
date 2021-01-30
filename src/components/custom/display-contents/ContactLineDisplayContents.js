import PhoneIcon from "../../generic/icons/PhoneIcon";
import EmailIcon from "../../generic/icons/EmailIcon";

const iconSelector = { phone: PhoneIcon, email: EmailIcon };

const ContactLineDisplayContents = (props) => {
  let values;
  ({ values } = props);

  return `${iconSelector[values.con_type]} ${values.con_method} ${
    values.con_address
  }`;
};

export default ContactLineDisplayContents;
