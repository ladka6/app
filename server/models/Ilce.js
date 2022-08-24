const mongoose = require('mongoose');

const IlceSchema = mongoose.Schema({
  mahalle: {
    type: String,
    required: true
  },
  saat: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('ilce', IlceSchema);