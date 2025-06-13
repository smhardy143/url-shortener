const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  short: { type: String, unique: true },
  long: String
});

module.exports = mongoose.model('Url', urlSchema);
