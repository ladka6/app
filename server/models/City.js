const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  ilceler: [String],
  saat: {
    type: Number,
    require: false
  }
});

module.exports = mongoose.model('city', CitySchema);
