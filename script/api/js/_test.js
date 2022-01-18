function test() {
  const api = new Api('https://api.telegram.org/{botId}:{token}/', {
    path: { token: '000000sdfsdf0000', botId: 'sdfe4s4s4' },
    data: {
      muteHttpExceptions: true,
      contentType: 'application/json',
    },
  })
  // console.log(api)
  const m = new Methods({ data: { call: 'all' } })
  m.post()
  // const url = new Fetch('https://api.trello.com', {
  //   url: '/1/tokens/{token}',
  //   path: { token: 'gdfgdf' },
  //   query: { fields: 'all' },
  // })
  // console.log(url)
}
