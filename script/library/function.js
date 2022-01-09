const appName = 'TrelloAPI'
/**
 *
 * @param {*} idWebHook
 * @param {*} callbackURL
 * @returns {TrelloAPI}
 */
// function updateWebHookForToken(idWebHook, callbackURL) {
//   return new TrelloWebHook().updateWebHookForToken(idWebHook, callbackURL)
// }

function test() {
  const v = new TrelloToken()
  // const variable = {}
  // variable.boardIdFact0 = '5e33ed07a1f5503ead51b63a'
  // variable.boardIdFact = '5e05161dc3abef51fcf4e761'
  // variable.boardIdBudget = '5e205c1e08b1ce8bac5a28e6'
  // variable.boardIdBudget2 = '5e33ebf6e535dd19af746f72'
  // variable.boardIdBudget3 = '5e33ed63d17a353274f570ce'
  // variable.boardIdTarget = '5e3cec63b47787407b262e0b'
  // const callbackURL =
  //   'https://script.google.com/macros/s/AKfycbzsm8f8xSHDbjecfRdgd2PvsMTRB4n9LDyB1lCKnNnhKxSwp9PF3O4cmEYfRQCcqgnZ/exec'
  // Object.entries(variable).forEach((model) => {
  //   v.createWebhookForToken(callbackURL, model[1], model[0])
  // })

  v.getWebHooksForToken()
}
// function updateWebHook(idWebHook, callbackURL) {
//   new TrelloWebHook().updateWebHook(idWebHook, callbackURL)
// }

// function getWebHooksForToken() {
//   new TrelloWebHook().getWebHooksForToken()
// }

// function createWebHook(idModel, callbackURL) {
//   new TrelloWebHook().createWebHook(idModel, callbackURL)
// }

// function deleteWebHooksForToken() {
//   new TrelloWebHook().deleteWebHooksForToken()
// }
