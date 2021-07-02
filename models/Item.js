const { model, Schema } = require('mongoose')

const Item = new Schema({
  name: String,
  description: String,
  price: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Item', Item)
