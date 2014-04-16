mongoose = require 'mongoose'

Zone = mongoose.Schema
  owner:
    type: mongoose.Schema.Types.ObjectId
    ref: 'Char'
    required: true
  name:
  	type     : String
  	unique   : true
  	required : true
  code :
    type : String
  parent : [
    type : mongoose.Schema.Types.ObjectId
    ref  : 'Zone'
  ]
  private :
    type : Boolean
    required : true
  zones: [
    type: mongoose.Schema.Types.ObjectId
    ref: 'Zone'
  ]
  rooms: [
    type: mongoose.Schema.Types.ObjectId
    ref: 'Room'
  ]

module.exports = mongoose.model 'Zone', Zone
