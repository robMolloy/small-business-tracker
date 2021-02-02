const normalizeCurrency = (qty, symbol = false, currency = "GBP") => {
  if (!symbol) return (Math.round(qty * 100) / 100).toFixed(2);
  else
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency,
    }).format(qty);
};

export default normalizeCurrency;
