/**
 * Initialization new API
 * @param {*} https
 * @param {*} permanentParams
 * @returns {apiLib}
 */
function newApi(https, permanentParams) {
  new Api(https, permanentParams)
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
function post(api, variableParams) {
  return new Methods().post(api, variableParams)
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
function get(api, variableParams) {
  return new Methods().get(api, variableParams)
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
function put(api, variableParams) {
  return new Methods().put(api, variableParams)
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
function del(api, variableParams) {
  return new Methods().del(api, variableParams)
}
