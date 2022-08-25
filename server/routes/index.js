var express = require('express');
var router = express.Router();
var faker = require('faker');
var IlceSchema = require('../models/Ilce');
var CitySchema = require('../models/City');

/* GET home page. */
router.get('/', function (req, res, next) {

});

router.get('/mersin', async function (req, res) {
  try {
    const city = await CitySchema.find({ city: "mersin" });
    res.json(city);
  }
  catch (err) {
    console.log(err)
  }
});

router.get('/hatay', async function (req, res) {
  try {
    const city = await CitySchema.find({ city: "hatay" });

    res.json(city);
  }
  catch (err) {
    console.log(err)
  }
});

router.get('/adana', async function (req, res) {
  try {
    const city = await CitySchema.find({ city: "adana" });

    res.json(city);
  }
  catch (err) {
    console.log(err)
  }
});

router.get('/mersin/akdeniz', async function (req, res) {
  try {
    const dist = await IlceSchema.find({ city: "mersin", ilce: "Akdeniz" });
    res.json(dist);
  } catch (err) {
    console.error(err)
  }
});

router.post('/fakeilce', async function (req, res) {
  const ilce = new IlceSchema({
    mahalle: ["ABDULLAH ŞAHUTOĞLU MAHALLESİ", "ADANALIOĞLU MAHALLESİ", "ADANALIOĞLU LİMONLU MAHALLESİ"],
    saat: 123
  });
  ilce.save();
  // for (var i = 0; i < 100; i++) {
  //   const mahalle = faker.address.streetAddress();
  //   const saat = faker.datatype.number();
  //   const user = new IlceSchema({
  //     mahalle: mahalle,
  //     saat: saat
  //   })
  //   user.save();
  // }
  res.json('data created')
});

router.post('/fakemersin', async function (req, res) {

  const ilce = await IlceSchema.find().limit(3);
  console.log(ilce[0].mahalle);

  const city = "mersin"
  const saat = faker.datatype.number();
  const ilceler = [ilce[0].mahalle, ilce[1].mahalle, ilce[2].mahalle]
  const user = new CitySchema({
    city: city,
    saat: saat,
    ilceler: ilceler
  })
  user.save();

  res.json('data created')
});

router.post('/fakeadana', async function (req, res) {
  const ilce = await IlceSchema.find().limit(3);

  const city = "adana"
  const saat = faker.datatype.number();
  const ilceler = [ilce[0], ilce[1], ilce[2]]
  const user = new CitySchema({
    city: city,
    saat: saat,
    ilceler: ilceler
  })
  user.save();

  res.json('data created')
});

router.post('/fakehatay', async function (req, res) {
  const ilce = await IlceSchema.find().limit(3);

  const city = "hatay"
  const saat = faker.datatype.number();
  const ilceler = [ilce[0], ilce[1], ilce[2]]
  const user = new CitySchema({
    city: city,
    saat: saat,
    ilceler: ilceler
  })
  user.save();

  res.json('data created')
});

module.exports = router;
