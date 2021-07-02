const router = require('express').Router()
const { Item, User } = require('../models')
const passport = require('passport')

// POST one Item
router.post('/items', passport.authenticate('jwt'), (req, res) => Item.create({
  name: req.body.name,
  description: req.body.description,
  price: req.body.price,
  user: req.user._id
})
  .then(item => User.findByIdAndUpdate(item.user, { $push: { menu: item._id } })
    .then(() => res.json(item))
    .catch(err => console.log(err)))
  .catch(err => console.log(err)))

module.exports = router
