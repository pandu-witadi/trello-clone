//
//
// 
const mongoose = require('mongoose')

module.exports = function (app) {
    mongoose.connect(app.get('mongodb'), {
        useMongoClient: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.Promise = global.Promise;

    app.set('mongooseClient', mongoose)
}
