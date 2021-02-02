const isNumber = (val) => {
  if ((typeof val !== "string" && typeof val !== "number") || val === "")
    return false;

  return isFinite(val);
};

export default isNumber;
