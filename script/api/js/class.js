class Fetch {
  /**
   * Create url and send fetch
   *
   * @param {string} url domain url
   * @param {object} params parametrs { url: '', path: {}, query: {}, data: {} }
   */
  constructor(url, params = { url: '', path: {}, query: {}, data: {} }) {
    this.getParametr(params)
    this.createUrl(url + params.url)
  }

  getParametr(params) {
    const pMap = new Map(Object.entries(params))
    !pMap.has('path') ? (this.path = {}) : (this.path = pMap.get('path'))
    !pMap.has('query') ? (this.query = {}) : (this.query = pMap.get('query'))
    !pMap.has('data') ? (this.data = {}) : (this.data = pMap.get('data'))
  }

  createPathParametrs(url, path) {
    return url.replace(
      new RegExp('{([^{]+)}', 'g'),
      function (_unused, varName) {
        return path[varName]
      }
    )
  }

  createQueryParametrs(query) {
    return Object.entries(query).reduce((queryString, query, index) => {
      if (query[1]) {
        if (!index) {
          queryString += '?' + query[0] + '=' + query[1]
        } else {
          queryString += '&' + query[0] + '=' + query[1]
        }
      }
      return queryString
    }, '')
  }

  createUrl(url) {
    this.url =
      this.createPathParametrs(url, this.path) +
      this.createQueryParametrs(this.query)
  }
  /**
   * Send fetch
   * @param {object} data fetch parametr
   * @returns {object} Responce data from fetch
   */
  fetch() {
    try {
      return JSON.parse(UrlFetchApp.fetch(this.url, this.data))
    } catch (error) {
      console.error(e)
    }
  }
}

//todo изучить и применить паттерн фабрики
class Api {
  constructor(permanentUrl, permanentParams = {}) {
    if (Api.exists) {
      return Api.instance
    }
    Api.instance = this
    Api.exists = true
    this.url = permanentUrl
    this.permanentParams = permanentParams
  }

  mergeParams(permanentParams, variableParams) {
    const params = variableParams
    Object.entries(permanentParams).forEach((param) => {
      if (!params[param[0]]) {
        params[param[0]] = param[1]
      } else {
        Object.assign(params[param[0]], param[1])
      }
    })
    return params
  }
}

class Methods {
  constructor(variableParams = {}) {
    const newApi = new Api()
    this.url = newApi.url
    this.params = newApi.mergeParams(newApi.permanentParams, variableParams)
  }
  post() {
    this.params.method = 'post'
    return new Fetch(this.url, this.params).fetch()
  }

  put() {
    this.params.method = 'put'
    return new Fetch(this.url, this.params).fetch()
  }

  get() {
    this.params.method = 'get'
    return new Fetch(this.url, this.params).fetch()
  }

  del() {
    this.params.method = 'delete'
    return new Fetch(this.url, this.params).fetch()
  }
}
