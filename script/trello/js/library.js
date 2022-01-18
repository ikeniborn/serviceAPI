/**
 * Initialization trello API
 * @param {*} key
 * @param {*} token
 * @returns {trelloLib}
 */
function newInstance(key, token) {
  new Instance(key, token)
}

function getToken(fields, webhooks) {
  return new TrelloToken().getToken(fields, webhooks)
}

function getTokenMember(fields) {
  return new TrelloToken().getTokenMember(fields)
}

/**
 * Retrieve all webhooks created with a Token.
 *
 * @returns {array} Array Webhook
 */
function getWebHooksForToken() {
  return new TrelloToken().getWebHooksForToken()
}

/**
 * Create a new webhook for a Token.
 *
 * @param {string} callbackURL The URL that the webhook should POST information to. Format: url
 * @param {string} idModel ID of the object to create a webhook on. Pattern: ^[0-9a-fA-F]{24}$
 * @param {string} description A description to be displayed when retrieving information about the webhook.
 * @returns {object} Webhook
 */
function createWebhookForToken(callbackURL, idModel, description) {
  return new TrelloToken().createWebhookForToken(
    callbackURL,
    idModel,
    description
  )
}

const trelloLib = {
  newInstance,
  getToken,
  getTokenMember,
  getWebHooksForToken,
  createWebhookForToken,
}
