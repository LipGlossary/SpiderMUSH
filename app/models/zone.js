// Generated by CoffeeScript 1.7.1
(function() {
  var Zone, mongoose;

  mongoose = require('mongoose');

  Zone = mongoose.Schema({
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Char',
      required: true
    },
    name: {
      type: String,
      unique: true,
      required: true
    },
    code: {
      type: String,
      required: true,
      unique: true
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Zone'
    },
    "private": {
      type: Boolean,
      required: true
    },
    zones: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zone'
      }
    ],
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
      }
    ]
  });

  Zone.methods.addZone = function(id, done) {
    this.zones.push(id);
    return this.save(function(err, data) {
      return done(err, data);
    });
  };

  Zone.methods.removeZone = function(id, done) {
    this.zones.pull(id);
    return this.save(function(err, data) {
      return done(err, data);
    });
  };

  module.exports = mongoose.model('Zone', Zone);

}).call(this);
