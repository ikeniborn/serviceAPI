class Instance {
  constructor() {
    if (Instance.exists) {
      return Instance.instance
    }
    Instance.instance = this
    Instance.exists = true
    this.api = apiLib.newApi(
      'https://api.coingecko.com/api/v3/',
      {},
      {},
      {
        muteHttpExceptions: true,
        header: 'accept: application/json',
      }
    )
  }
}

class Ping {
  constructor() {
    new Instance()
  }
  ping() {
    return apiLib.method('get', 'ping')
  }
}

class Price {
  constructor() {
    new Instance()
  }

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
      'simple/price',
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

class Coins {
  constructor() {
    new Instance()
  }

  list(include_platform = false) {
    return (
      apiLib.method(
        'get',
        'coins/list',
        {},
        {
          include_platform,
        }
      ) || []
    )
  }

  markets(ids, vs_currency = 'usd', price_change_percentage = '24h, 7d, 30d') {
    return (
      apiLib.method(
        'get',
        'coins/markets',
        {},
        {
          vs_currency,
          ids,
          price_change_percentage,
        }
      ) || []
    )
  }
}
