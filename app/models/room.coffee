mongoose = require 'mongoose'

Room = mongoose.Schema
  owner:
    type: mongoose.Schema.Types.ObjectId
    ref: 'Char'
    required: true
  name:
  	type: String
  	unique: true
  	required: true
  look: 
  	type: String
  	required: true
  exits:
    north:
      type: mongoose.Schema.Types.ObjectId
      ref: 'Exit'
    east:
      type: mongoose.Schema.Types.ObjectId
      ref: 'Exit'
    south:
      type: mongoose.Schema.Types.ObjectId
      ref: 'Exit'
    west:
      type: mongoose.Schema.Types.ObjectId
      ref: 'Exit'
    up:
      type: mongoose.Schema.Types.ObjectId
      ref: 'Exit'
    down:
      type: mongoose.Schema.Types.ObjectId
      ref: 'Exit'

module.exports = mongoose.model 'Room', Room
