class Instance {
  constructor(api_key = '') {
    if (Instance.exists) {
      return Instance.instance
    }
    Instance.instance = this
    Instance.exists = true
    this.api = apiLib.newApi(
      'https://min-api.cryptocompare.com/data',
      {},
      { api_key },
      {
        muteHttpExceptions: true,
        contentType: 'application/json',
      }
    )
  }
}

class Price {
  constructor(tsyms = 'USD') {
    new Instance()
    this.tsyms = tsyms
  }
  single(fsym = '') {
    return apiLib.method(
      'get',
      '/price',
      {},
      {
        fsym: fsym,
        tsyms: this.tsyms,
        relaxedValidation: true,
      }
    )
  }
  multi(fsyms = '') {
    return apiLib.method(
      'get',
      '/pricemulti',
      {},
      {
        fsyms: fsyms,
        tsyms: this.tsyms,
        relaxedValidation: true,
      }
    )
  }
  multiFull(fsyms = '') {
    return apiLib.method(
      'get',
      '/pricemultifull',
      {},
      {
        fsyms: fsyms,
        tsyms: this.tsyms,
        relaxedValidation: true,
      }
    )
  }
  historicalDay(fsym = '', ts = new Date().valueOf()) {
    return apiLib.method(
      'get',
      '/pricehistorical',
      {},
      {
        fsyms: fsym,
        tsyms: this.tsyms,
        ts: ts,
      }
    )
  }
}

class Info {
  constructor() {
    new Instance()
  }
  coinList(fsym = '') {
    let query
    fsym ? (query = { fsym }) : (query = {})
    return apiLib.method('get', '/all/coinlist', {}, query).Data
  }
}
