import * as yup from "yup";
import isNumber from "./isNumber";

const isNumOrBlank = () =>
  yup.string().test("is-num-or-blank", "Must be a number or blank", (val) => {
    return val === "" || isNumber(val);
  });

export default isNumOrBlank;
