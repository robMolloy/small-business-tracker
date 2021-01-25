import * as yup from "yup";

const RecordSchema = yup.object().shape({
  rec_prj_id: yup.string().required,
});

export default RecordSchema;
