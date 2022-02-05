class Instance {
  constructor(apiKey) {
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
        headers: { 'X-CMC_PRO_API_KEY': apiKey },
      }
    )
  }
}

class Cryptocurrency {
  constructor() {
    new Instance()
  }

  quotesLatest(id = '1', convert = 'USD') {
    return apiLib.method(
      'get',
      '/cryptocurrency/quotes/latest',
      {},
      {
        id,
        convert,
      }
    ).data
  }

  mapList() {
    return apiLib.method('get', '/cryptocurrency/map', {}, {}).data
  }
}
