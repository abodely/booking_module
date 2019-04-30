require('newrelic');
const express = require('express');
const path = require('path');
const port = require('./.env.js');
const db = require('../database/index')
const app = express();
const redis = require('redis')
const client = redis.createClient();
const sequelize = require('../database/index');

app.use('/bookings/:accommodationid', express.static(path.join(__dirname, '../client/dist')));


const findAccoms = (req, res) => {
    db.query(`SELECT * FROM accommodation WHERE id = ${req.params.accommodationid}`)
      .then(accommodations => {
        db.query(`SELECT date FROM reservations WHERE accommodation_id = ${req.params.accommodationid};`)
          .then(avail => {
            let accommodation = accommodations[0]
            let availability = avail[0]
            client.setex(req.params.accommodationid, 18000, JSON.stringify(accommodation));
            res.send(JSON.stringify({accommodation, availability}));
          })
      })
}

const getCache = (req, res) => {
  client.get(req.params.accommodationid, (err, result) => {
    if (result) {
      res.send(result) 
    } else {
      findAccoms(req, res)
    }
  })
}

app.get('/bookings/:accommodationid/reserve', getCache)

app.get('/bookings/:accommodationid/reserve/:startDate&:endDate', async (req, res) => {
  const availability = await sequelize.query(`SELECT date FROM reservations WHERE accommodation_id = ${req.params.accommodationid}`,
  { type: sequelize.QueryTypes.SELECT });

  res.send(JSON.stringify({ availability }));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));