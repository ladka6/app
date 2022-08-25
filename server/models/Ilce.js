const mongoose = require('mongoose');

const IlceSchema = mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  ilce: {
    type: String,
    required: true
  },
  mahalle: [String],
  saat: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('ilce', IlceSchema);