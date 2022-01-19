/**
 * Get the current price of any cryptocurrencies in any other supported currencies that you need.
 *
 * @param {string} ids id of coins, comma-separated if querying more than 1 coin.
 * @param {string} vs_currencies vs_currency of coins, comma-separated if querying more than 1 vs_currency
 * @param {boolean} include_market_cap
 * @param {boolean} include_24hr_vol
 * @param {boolean} include_24hr_change
 * @param {boolean} include_last_updated_at
 * @returns
 */

function priceGet(
  ids,
  vs_currencies,
  include_market_cap,
  include_24hr_vol,
  include_24hr_change,
  include_last_updated_at
) {
  return new Price().get(
    ids,
    vs_currencies,
    include_market_cap,
    include_24hr_vol,
    include_24hr_change,
    include_last_updated_at
  )
}

// const price = {
//   priceGet,
// }
