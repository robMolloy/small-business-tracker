import * as yup from "yup";
import "yup-phone";

const PrjCusLinkSchema = yup.object().shape({
  pcl_cus_id: yup.string().required,
  pcl_prj_id: yup.string().required,
});

export default PrjCusLinkSchema;
