/**
 * Initialization trello API
 * @param {string} key
 * @param {string} token
 */
function newInstance(key, token) {
  new Instance(key, token)
}

const trelloLib = {
  newInstance,
  getToken,
  getTokenMember,
  getWebHooksForToken,
  createWebhookForToken,
}
