const getIsoDateString = (dtString = "") => {
  const dt = dtString === "" ? new Date() : new Date(dtString);
  return dt.toISOString().slice(0, -8);
};

export default getIsoDateString;
