class Fetch {
  /**
   * Create and send fetch
   *
   * @param {string} https api domain url
   * @param {object} params api parametrs
   */
  constructor(https, params = {}) {
    this.https = https
    this.getParametr(params)
    this.createUrl()
  }

  getParametr(params) {
    const parametrsArray = Object.entries(params)
    this.pMap = new Map(parametrsArray)
    parametrsArray.forEach((param) => {
      this[param[0]] = param[1]
    })
    if (!this.pMap.has('path')) {
      this.path = {}
      if (this.api.match('token') && this.pMap.has('token')) {
        this.path.token = this.token
      }
    }
    if (!this.pMap.has('query')) {
      this.query = {}
    }
    if (this.pMap.has('key')) {
      this.query.key = this.key
    }
    if (this.pMap.has('token')) {
      this.query.token = this.token
    }
  }
  /**
   * Generate query parametr for api url
   * @param {object} queryParametrs QUERY PARAMETERS
   * @returns {TrelloApi}
   */
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
  /**
   * @param {string} api
   * @param {object} path
   * @returns {string} newest api paramentr with path parametr
   */
  createPathParametrs(api, path) {
    return api.replace(
      new RegExp('{([^{]+)}', 'g'),
      function (_unused, varName) {
        return path[varName]
      }
    )
  }
  /**
   *
   * @param {string} api part of api link with PATH PARAMETERS. Example: /1/webhooks/{id}
   * @param {object} path path and query parametr api. Example: {path:{},query:{}}
   * @returns {TrelloApi} Object TrelloApi
   */
  createUrl() {
    this.url =
      this.https +
      this.createPathParametrs(this.api, this.path) +
      this.createQueryParametrs(this.query)
    return this
  }
  /**
   * Send fetch
   * @param {object} data fetch parametr
   * @returns {object} Responce data from fetch
   */
  fetch(data) {
    try {
      const responce = JSON.parse(UrlFetchApp.fetch(this.url, data))
      return responce
    } catch (error) {
      console.error(e)
    }
  }
}

//todo изучить и применить паттерн фабрики
class Api {
  constructor(https, permanentParams = {}) {
    if (Api.exists) {
      console.log('old Api')
      return Api.instance
    }
    Api.instance = this
    Api.exists = true
    console.log('new Api')
    this.https = https
    this.params = permanentParams
  }
}

class Methods {
  constructor() {
    const api = new Api()
    this.https = api.https
    this.params = api.params
    this.data = {
      muteHttpExceptions: true,
      contentType: 'application/json',
    }
  }
  post(api = '', variableParams = { path: {}, query: {} }, data = {}) {
    this.params.method = 'post'
    this.params.api = api
    this.params = Object.assign(this.params, variableParams)
    return new Fetch(this.https, this.params).fetch(this.data)
  }

  put(api = '', variableParams = { path: {}, query: {} }) {
    this.params.method = 'put'
    this.params.api = api
    this.params = Object.assign(this.params, variableParams)
    return new Fetch(this.https, this.params).fetch(this.data)
  }

  get(api = '', variableParams = { path: {}, query: {} }) {
    this.params.method = 'get'
    this.params.api = api
    this.params = Object.assign(this.params, variableParams)
    return new Fetch(this.https, this.params).fetch(this.data)
  }

  del(api = '', variableParams = { path: {}, query: {} }) {
    this.params.method = 'delete'
    this.params.api = api
    this.params = Object.assign(this.params, variableParams)
    return new Fetch(this.https, this.params).fetch(this.data)
  }
}
