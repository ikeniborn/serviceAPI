class Instance {
  constructor(API_KEY) {
    if (Instance.exists) {
      return Instance.instance
    }
    Instance.instance = this
    Instance.exists = true
    this.api = apiLib.newApi(
      'https://pro-api.coinmarketcap.com/v1',
      {},
      {},
      {
        muteHttpExceptions: true,
        contentType: 'accept: application/json',
        headers: { 'X-CMC_PRO_API_KEY': API_KEY },
      }
    )
  }
}

class CryptocurrencyQuotes {
  constructor(slug = 'bitcoin', convert = 'USD') {
    new Instance()
    this.slug = slug
    this.convert = convert
  }
  latest() {
    return apiLib.method(
      'get',
      '/cryptocurrency/quotes/latest',
      {},
      {
        slug: this.slug,
        convert: this.convert,
      }
    ).data
  }
}
