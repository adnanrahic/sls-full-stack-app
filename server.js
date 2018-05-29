const app = require('./app')
const sls = require('serverless-http')
module.exports.run = sls(app)