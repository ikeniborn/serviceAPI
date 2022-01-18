//! Create webhook with deploy the web app will be authorized to run using your account data: Only myself.
//! Use webhook with deploy the web app will be authorized to run using your account data: Anyone.
class Instance {
  /**
   * Init trello api instance
   * @param {string} key
   * @param {string} token
   */
  constructor(key = '', token = '') {
    if (Instance.exists) {
      return Instance.instance
    }
    Instance.instance = this
    Instance.exists = true
    this.api = apiLib.newApi(
      'https://api.trello.com',
      {},
      { key, token },
      {
        muteHttpExceptions: true,
        contentType: 'application/json',
      }
    )
  }
}

// class TrelloWebhook {
//   constructor() {
//     this.trello = new Trello()
//   }

//   createWebhook(callbackURL, idModel, active = true, description = '') {
//     return super.methods.post('/1/webhooks/', {
//       query: {
//         callbackURL,
//         idModel,
//         active,
//         description,
//       },
//     })
//   }
//   /**
//    * Get a webhook by ID.
//    * @param {string} id ID of the webhook to retrieve.
//    */
//   getWebhook(id) {
//     this.methods.get('/1/webhooks/{id}', { path: { id } })
//   }
//   /**
//    * Update a webhook by ID.
//    * @param {string} id ID of the webhook to retrieve. Pattern: ^[0-9a-fA-F]{24}$
//    * @param {string} callbackURL A valid URL that is reachable with a HEAD and POST request. Format: url
//    * @param {string} idModel ID of the model to be monitored
//    * @param {boolean} active Determines whether the webhook is active and sending POST requests.
//    * @param {string} description A string with a length from 0 to 16384.
//    */
//   updateWebhook(
//     id,
//     callbackURL = '',
//     idModel = '',
//     active = true,
//     description = ''
//   ) {
//     this.methods.post('/1/webhooks/{id}', {
//       path: { id },
//       query: { callbackURL, idModel, active, description },
//     })
//   }
//   /**
//    * Delete a webhook by ID.
//    * @param {string} id ID of the webhook to retrieve. Pattern: ^[0-9a-fA-F]{24}$
//    * @returns {{}}
//    */
//   deleteWebhook(id) {
//     return this.methods.detele('/1/webhooks/{id}', { path: { id } })
//   }
//   /**
//    * Get a field on a Webhook.
//    * @param {string} id ID of the webhook. Pattern: ^[0-9a-fA-F]{24}$
//    * @param {string} field Field to retrieve. Valid values: active, callbackURL, description, idModel, consecutiveFailures, firstConsecutiveFailDate
//    * @returns {{}}
//    */
//   getFieldWebhook(id, field) {
//     return this.methods.get('/1/webhooks/{id}/{field}', {
//       path: { id, field },
//     })
//   }
// }

class TrelloToken {
  constructor() {
    this.token = new Instance().api.permanentParams.query.token
  }

  getToken(fields = 'all', webhooks = false) {
    return apiLib.method(
      'get',
      '/1/tokens/{token}',
      { token: this.token },
      { fields, webhooks },
      {}
    )
  }

  getTokenMember(fields = 'all') {
    return apiLib.method(
      'get',
      '/1/tokens/{token}/member',
      { token: this.token },
      { fields }
    )
  }

  getWebHooksForToken() {
    return apiLib.method('get', '/1/tokens/{token}/webhooks', {
      token: this.token,
    })
  }

  createWebhookForToken(callbackURL, idModel, description = '') {
    return apiLib.method(
      'post',
      '/1/tokens/{token}/webhooks',
      { token: this.token },
      { callbackURL, idModel, description }
    )
  }
}

// class TrelloBoard {
//   /**
//    * Api for board
//    * @param {string} id board id. Pattern: ^[0-9a-fA-F]{24}$
//    */
//   constructor(id) {
//     this.id = id
//   }
//   /**
//    * Main method for board
//    * @param {object} query
//    * @returns {{}}
//    */
//   getBoard(query) {
//     return super.apiMethod.get('/1/boards/{id}', {
//       path: { id: this.id },
//       query,
//     })
//   }
//   //

//   getBoardLabels(labels = 'all') {
//     return this.getBoard({ labels })
//   }

//   addLabel(name, color) {
//     const urlParams =
//       'labels?name=' +
//       name +
//       '&color=' +
//       color +
//       '&idBoard=' +
//       this.boardId +
//       '&'
//     const fetchData = super.post(urlParams)
//     return { id: fetchData.id, name: fetchData.name }
//   }

//   // getLabel(color) {
//   //   const urlParams = 'boards/' + this.boardId + '/labels?fields=all&limit=10&'
//   //   const fetchData = super.get(urlParams)
//   //   const label = fetchData.filter((label) => {
//   //     return label.color === color
//   //   })
//   //   return label[0]
//   // }
//   updateName(name) {
//     const urlParams = 'boards/' + this.boardId + '?name=' + name + '&'
//     super.post(urlParams)
//   }
//   getLists() {
//     const urlParams = 'boards/' + this.boardId + '/lists?cards=none&'
//     const fetchData = super.get(urlParams)
//     const lists = fetchData.map((list) => {
//       return { id: list.id, name: list.name, color: list.color }
//     })
//     return lists
//   }
//   addList(listName) {
//     const urlParams =
//       'lists/?name=' + listName + '&idBoard=' + this.boardId + '&'
//     const fetchData = super.post(urlParams)
//     return new TrelloList(fetchData.id)
//   }
// }

// class TrelloList {
//   constructor(listId) {
//     this.listId = listId
//   }
//   get boardId() {
//     const urlParams = 'lists/' + this.listId + '?'
//     const fetchData = super.get(urlParams)
//     return fetchData.idBoard
//   }
//   get listName() {
//     const urlParams = 'lists/' + this.listId + '?'
//     const fetchData = super.get(urlParams)
//     return fetchData.name
//   }
//   close() {
//     const urlParams = 'lists/' + this.listId + '/closed?value=true&'
//     super.put(urlParams)
//   }
//   moveToBoard(boardId) {
//     const urlParams = 'lists/' + this.listId + '/idBoard?value=' + boardId + '&'
//     super.put(urlParams)
//   }
//   updateName(listName) {
//     const urlParams = 'lists/' + this.listId + '?name=' + listName + '&'
//     super.put(urlParams)
//   }
//   getAllCards() {
//     const urlParams = 'lists/' + this.listId + '/cards?'
//     const fetchData = super.get(urlParams)
//     const cardArray = fetchData.map((card) => {
//       return { id: card.id, name: card.name }
//     })
//     return cardArray
//   }
//   moveAllCards(newListId) {
//     const newList = new TrelloList(newListId)
//     const urlParams =
//       'lists/' +
//       this.listId +
//       '/moveAllCards?idBoard=' +
//       newList.boardId +
//       '&idList=' +
//       newListId +
//       '&'
//     super.post(urlParams)
//   }
//   archiveAllCards() {
//     const urlParams = 'lists/' + this.listId + '/archiveAllCards?'
//     super.post(urlParams)
//   }
//   addCard(cardName, position, labelId) {
//     const urlParams =
//       'cards?pos=' +
//       position +
//       '&name=' +
//       cardName +
//       '&idList=' +
//       this.listId +
//       '&idLabels=' +
//       labelId +
//       '&'
//     const fetchData = super.post(urlParams)
//     return new TrelloCard(fetchData.id)
//   }
// }

// class TrelloCard {
//   constructor(cardId) {
//     super()
//     this.cardId = cardId
//   }
//   get listId() {
//     const urlParams = 'cards/' + this.cardId + '/list?&'
//     const fetchData = super.get(urlParams)
//     return fetchData.id
//   }
//   get boardId() {
//     const urlParams = 'cards/' + this.cardId + '/list?&'
//     const fetchData = super.get(urlParams)
//     return fetchData.idBoard
//   }
//   get labels() {
//     const urlParams = 'cards/' + this.cardId + '/labels?'
//     const fetchData = super.get(urlParams)
//     return fetchData
//   }
//   addComment(comment) {
//     const urlParams =
//       'cards/' + this.cardId + '/actions/comments?text=' + comment + '&'
//     super.post(urlParams)
//   }
//   moveToList(listId, newListId) {
//     const newList = new TrelloList(newListId)
//     const urlParams =
//       'cards/' +
//       this.cardId +
//       '/idBoard?value=' +
//       newList.boardId +
//       '&idList=' +
//       listId +
//       '&'
//     const fetchData = super.put(urlParams)
//     return fetchData.id
//   }
//   updateDescription(description) {
//     const urlParams = 'cards/' + this.cardId + '?desc=' + description + '&'
//     super.put(urlParams)
//   }
//   close() {
//     const urlParams = '/cards/' + this.cardId + '?closed=true&'
//     super.put(urlParams)
//   }
// }

// class TrelloAction {
//   constructor(actionId) {
//     super()
//     this.actionId = actionId
//   }
//   addCardReaction(reaction) {
//     payload = { payload: JSON.stringify(reaction) }
//     this.constantParams = Object.assign(this.constantParams, payload)
//     const urlParams = 'actions/' + postObject.actionId + '/reactions?'
//     super.post(urlParams)
//   }
// }

// class TrelloRequest {
//   constructor(e) {
//     this.contents = JSON.parse(e.postData.contents)
//     if (contents) this.actionType = contents.action.type
//   }
//   addLog(table) {
//     const promise = new Promise(function (resolve) {})
//     new GoogleSheet(DATABASE, table)
//   }
// }
