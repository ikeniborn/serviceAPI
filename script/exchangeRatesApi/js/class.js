class Instance {
  constructor(app_id = '') {
    if (Instance.exists) {
      return Instance.instance
    }
    Instance.instance = this
    Instance.exists = true
    this.api = apiLib.newApi(
      'https://openexchangerates.org/api/',
      {},
      { app_id },
      {
        muteHttpExceptions: true,
        contentType: 'application/json',
      }
    )
  }
}

class Rates {
  constructor(base = 'USD') {
    new Instance()
    this.base = base
  }
  currencies() {
    return apiLib.method('get', 'currencies.json').symbols
  }
  latest(symbols = 'USD') {
    return apiLib.method(
      'get',
      'latest.json',
      {},
      {
        base: this.base,
        symbols,
      }
    ).rates
  }
  history(date, symbols = 'USD') {
    return apiLib.method(
      'get',
      'historical/{date}.json',
      { date },
      {
        base: this.base,
        symbols,
      }
    )
  }
}
