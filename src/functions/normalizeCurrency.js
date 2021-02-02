const normalizeCurrency = (qty, symbol = false, currency = "GBP") => {
  if (!symbol) return Math.round(qty * 100) / 100;
  else
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency,
    }).format(qty);
  // .formatToParts(qty)
  // .filter((rtn) => rtn.type !== "currency")
  // .filter((rtn) => rtn.type !== "group")
  // .map((rtn) => rtn.value)
  // .join("");
};

export default normalizeCurrency;
