class Instance {
  /**
   * Init trello api instance
   * @param {string} key
   * @param {string} token
   */
  constructor() {
    if (Instance.exists) {
      return Instance.instance
    }
    Instance.instance = this
    Instance.exists = true
    this.api = apiLib.newApi(
      'https://api.coingecko.com/api/v3',
      {},
      {},
      {
        muteHttpExceptions: true,
        contentType: 'application/json;charset=utf-8 ',
        header: { accept: 'application/json' },
      }
    )
  }
}

class Ping {
  ping() {
    return apiLib.method('get', '/ping')
  }
}

class Price {
  get(
    ids,
    vs_currencies,
    include_market_cap = false,
    include_24hr_vol = false,
    include_24hr_change = false,
    include_last_updated_at = false
  ) {
    return apiLib.method(
      'get',
      '/simple/price',
      {},
      {
        ids,
        vs_currencies,
        include_market_cap,
        include_24hr_vol,
        include_24hr_change,
        include_last_updated_at,
      }
    )
  }
}
