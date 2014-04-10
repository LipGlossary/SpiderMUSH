mongoose = require 'mongoose'

Zone = mongoose.Schema
  owner:
    type: mongoose.Schema.Types.ObjectId
    ref: 'Char'
    required: true
  name:
  	type: String
  	unique: true
  	required: true
  zones: [
    type: mongoose.Schema.types.ObjectId
    ref: 'Zone'
  ]
  rooms: [
    type: mongooseSchema.types.ObjectId
    ref: 'Room'
  ]

module.exports = mongoose.model 'Zone', Zone
