//
//
//
const test = require('./test/test.service.js')
const users = require('./users/users.service.js')

module.exports = function (app) {
    app.configure(test)
    app.configure(users)
}
