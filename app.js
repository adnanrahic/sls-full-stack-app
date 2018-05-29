const express = require('express')
const app = express()
const db = require('./db')

app.get('/api', (req, res, next) => res.status(200).send('Api Works!'))

module.exports = app