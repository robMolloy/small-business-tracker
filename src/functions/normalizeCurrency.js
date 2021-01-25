const normalizeCurrency = (qty, currency = "GBP") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(qty);
};

export default normalizeCurrency;
