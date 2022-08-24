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

// const insertDataSchema = mongoose.Schema({
//   DATE: {
//       type : String,
//       required : true
//   },
//   HOUR: {
//       type : Number,
//       required : true
//   },
//   STORE_ID: {
//       type : Number,
//       required: true
//   },
//   IMWH: {
//       type: Number,
//       required: true
//   }
// });



// module.exports = mongoose.model('insert-data', insertDataSchema);
