let mongoose = require('mongoose')
let Schema = mongoose.Schema

//DEFINE THE SCHEMA
let schema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  img: { type: String, required: true },
  breed: { type: String, default: 'Mixed' },
  age: { type: Number },
  color: [{ type: String }],
  gender: { type: String, required: true },
  _id: { type: String },
  __v: { type: Number },
})


module.exports = mongoose.model('Cat', schema)