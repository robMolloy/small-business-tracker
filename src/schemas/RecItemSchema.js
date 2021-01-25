import * as yup from "yup";

const RecordItemSchema = yup.object().shape({
  rci_work: yup.string().required,
});

export default RecordItemSchema;
