const router = require('express').Router()
let Cat = require('../models/Cat')


//Logger
router.get('/', (req, res, next) => {
  console.log('Meow')
  //allows knight/request to continue
  next()
})


//GET ALL CATS
router.get('/', (req, res, next) => {
  //Returns all cats from the database
  Cat.find({})
    .then(cats => {
      res.send(cats)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//GET CAT BY ID
router.get('/:id', (req, res, next) => {
  Cat.findById(req.params.id)
    .then(cat => {
      res.send(cat)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//CREATE/POST CAT
router.post('/', (req, res, next) => {
  Cat.create(req.body)
    .then(cat => {
      res.send(cat)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//EDIT CAT /api/cats/:id
router.put('/:catId', (req, res, next) => {
  Cat.findByIdAndUpdate(req.params.catId, req.body, { new: true })
    .then(cat => {
      res.send(cat)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//DELETE CAT
router.delete('/:id', (req, res, next) => {
  Cat.findByIdAndDelete(req.params.id)
    .then(deletedCat => {
      res.send('Delorted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//same as export default
module.exports = router