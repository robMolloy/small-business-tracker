import * as yup from "yup";

const isNumOrBlank = () =>
  yup.string().test("is-num-or-blank", "Must be a number or blank", (val) => {
    if (typeof val !== "string" && typeof val !== "number") return false;
    return val === "" || isFinite(val);
  });

export default isNumOrBlank;
