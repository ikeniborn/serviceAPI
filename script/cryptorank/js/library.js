/**
 *
 * @param {string} api_key
 */
function instance(api_key) {
  new Instance(api_key)
}

/**
 * List of currencies with data
 *
 * @param {string} ids List of currency ids with comma separator. Example: ids=1,2,3
 * @param {string} symbols List of currency symbols with comma separator. Example: symbols=BTC,LTC,BNB
 * @param {string} convert Prices will show in this currency. Enum: "USD" "ETH" "BTC"
 * @returns {array}
 */
function currenciesLatest(ids, symbols, convert) {
  return new Currencies(ids, symbols, convert).latest()
}
