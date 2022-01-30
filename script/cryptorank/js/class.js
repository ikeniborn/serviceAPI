class Instance {
  constructor(api_key = '') {
    if (Instance.exists) {
      return Instance.instance
    }
    Instance.instance = this
    Instance.exists = true
    this.api = apiLib.newApi(
      'https://api.cryptorank.io/v1',
      {},
      { api_key },
      {
        muteHttpExceptions: true,
        contentType: 'application/json',
      }
    )
  }
}

class Currencies {
  constructor(ids = '1', convert = 'USD') {
    new Instance()
    this.ids = ids
    if (['USD', 'BTC', 'ETH'].indexOf(convert) === -1) {
      this.convert = 'USD'
    } else {
      this.convert = convert.toUpperCase()
    }
  }
  latest() {
    return apiLib.method(
      'get',
      '/currencies',
      {},
      {
        convert: this.convert,
        ids: this.ids,
      }
    ).data
  }
}
