module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/menudb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
