class Api {
  /**
   * Формирование запроса API и отправка на сервер
   */
  constructor(https, paramentr = {}) {
    this.https = https
    this.getParametr(paramentr)
  }
  getParametr(parametrs = {}) {
    if (!parametrs.isEmpty()) {
      Object.entries(parametrs).forEach((parametr) => {
        this[parametr[0]] = parametr[1]
      })
    }
  }
  /**
   * Generate query parametr for api url
   * @param {object} queryParametrs QUERY PARAMETERS
   * @returns {TrelloApi}
   */
  createQueryParametrs(queryParametrs = {}) {
    const qMap = new Map(Object.entries(queryParametrs))
    if (!qMap.has('key')) {
      queryParametrs.key = this.key
    }
    if (!qMap.has('token')) {
      queryParametrs.token = this.token
    }
    return Object.entries(queryParametrs).reduce(
      (queryString, query, index) => {
        if (query[1]) {
          if (!index) {
            queryString += '?' + query[0] + '=' + query[1]
          } else {
            queryString += '&' + query[0] + '=' + query[1]
          }
        }
        return queryString
      },
      ''
    )
  }
  /**
   *
   * @param {string} apiParametr
   * @param {object} pathParametr
   * @returns {string} newest api paramentr with path parametr
   */
  createPathParametrs(apiParametr, pathParametr = {}) {
    return apiParametr.replace(
      new RegExp('{([^{]+)}', 'g'),
      function (_unused, varName) {
        return pathParametr[varName]
      }
    )
  }
  /**
   *
   * @param {string} api part of api link with PATH PARAMETERS. Example: /1/webhooks/{id}
   * @param {object} path path and query parametr api. Example: {path:{},query:{}}
   * @returns {TrelloApi} Object TrelloApi
   */
  createUrl(api, parametr = { path: {}, query: {} }) {
    const pMap = new Map(Object.entries(parametr))
    if (!pMap.has('path')) {
      parametr.path = {}
    }
    if (!pMap.has('query')) {
      parametr.query = {}
    }
    this.url =
      this.https +
      this.createPathParametrs(api, parametr.path) +
      this.createQueryParametrs(parametr.query)
    return this
  }
  /**
   * Send fetch
   * @param {object} data fetch parametr
   * @returns {object} Responce data from fetch
   */
  fetchMethod(data) {
    try {
      const responce = JSON.parse(UrlFetchApp.fetch(this.url, data))
      return responce
    } catch (error) {
      console.error(e)
    }
  }
}
//todo изучить и применить паттерн фабрики
class ApiMethod extends Api {
  constructor(https, parametrs = {}) {
    super(https, parametrs)
    this.params = {
      muteHttpExceptions: true,
      contentType: 'application/json',
    }
  }
  /**
   * POST method to fetch
   * @param {string} api api constructor with path parametr. Example: /1/tokens/{token}
   * @param {object} paramentr parametr api as { path: {parametr}, query: {query} }. Example: {
      path: { token: this.apiMethod.token },
      query: { callbackURL, idModel, description }
    }
   * @returns {object} Responce object
   */
  post(api, paramentr = { path: {}, query: {} }) {
    this.params.method = 'post'
    return super.createUrl(api, paramentr).fetchMethod(this.params)
  }
  /**
   * PUT method to fetch
   * @param {string} api api constructor with path parametr. Example: /1/tokens/{token}
   * @param {object} paramentr parametr api as { path: {parametr}, query: {query} }. Example: {
      path: { token: this.apiMethod.token },
      query: { callbackURL, idModel, description }
    }
   * @returns {object} Responce object
   */
  put(api, paramentr = { path: {}, query: {} }) {
    this.params.method = 'put'
    return super.createUrl(api, paramentr).fetchMethod(this.params)
  }
  /**
   * GET method to fetch
   * @param {string} api api constructor with path parametr. Example: /1/tokens/{token}
   * @param {object} paramentr parametr api as { path: {parametr}, query: {query} }. Example: {
      path: { token: this.apiMethod.token },
      query: { callbackURL, idModel, description }
    }
   * @returns {object} Responce object
   */
  get(api, paramentr = { path: {}, query: {} }) {
    this.params.method = 'get'
    return super.createUrl(api, paramentr).fetchMethod(this.params)
  }
  /**
   * GET method to fetch
   * @param {string} api api constructor with path parametr. Example: /1/tokens/{token}
   * @param {object} paramentr parametr api as { path: {parametr}, query: {query} }. Example: {
      path: { token: this.apiMethod.token },
      query: { callbackURL, idModel, description }
    }
   * @returns {object} Responce object
   */
  detele(api, paramentr = { path: {}, query: {} }) {
    this.params.method = 'delete'
    return super.createUrl(api, paramentr).fetchMethod(this.params)
  }
}
