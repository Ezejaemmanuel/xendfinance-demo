// export function formatCurrency(value: number, removeZeros?: boolean) {
//     let formattedValue;
//     if (removeZeros) {
//         formattedValue = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
//     } else {
//         formattedValue = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'USD' }).format(value);
//     }
//     return formattedValue;
// }

export function formatCurrency(value: number, removeZeros?: boolean) {
  let formattedValue;
  if (removeZeros) {
    formattedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      // Use 'narrowSymbol' if supported, otherwise fallback to 'symbol'
      currencyDisplay: "narrowSymbol",
    }).format(value);
  } else {
    formattedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      // Use 'narrowSymbol' if supported, otherwise fallback to 'symbol'
      currencyDisplay: "narrowSymbol",
    }).format(value);
  }

  // Fallback for browsers that do not support 'narrowSymbol'
  // This will replace 'US$' with '$'
  formattedValue = formattedValue.replace("US$", "$");

  return formattedValue;
}

export function formatCurrencyNaira(value: number, removeZeros?: boolean) {
  let formattedValue;
  if (removeZeros) {
    formattedValue = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      // Use 'narrowSymbol' if supported, otherwise fallback to 'symbol'
      currencyDisplay: "narrowSymbol",
    }).format(value);
  } else {
    formattedValue = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      // Use 'narrowSymbol' if supported, otherwise fallback to 'symbol'
      currencyDisplay: "narrowSymbol",
    }).format(value);
  }

  // Since the 'narrowSymbol' for NGN might not be widely supported and could default to '₦',
  // there might not be a need for a fallback similar to the 'US$' to '$'.
  // However, if you encounter a specific symbol you wish to replace, you can do so here.

  return formattedValue;
}
