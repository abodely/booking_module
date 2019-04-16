const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dateFormatter = require('./helpers');
const port = require('./.env.js');

const app = express();
const sequelize = require('../database/index');
const Models = require('../database/models/index');

app.use('/bookings/:accommodationid', express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/bookings/:accommodationid/reserve', async (req, res) => {
  const accommodation = await Models.Accommodation.findAll({
    where: { id: req.params.accommodationid },
  });

  const now = new Date();
  let current;
  if (now.getMonth() === 11) {
    current = new Date(now.getFullYear() + 1, 0, 1);
  } else {
    current = new Date(`${now.getMonth() + 2} 1, ${now.getFullYear()}`);
  }

  const availability = await sequelize.query(`SELECT reservations.date FROM reservations INNER JOIN accommodation INNER JOIN guests 
  WHERE reservations.accommodation_id = accommodation.id AND guests.id = reservations.guest_id AND accommodation.id = ${req.params.accommodationid}
  AND reservations.date BETWEEN CAST('${dateFormatter(now)}' AS DATE) AND CAST('${dateFormatter(current)}' AS DATE);`,
  { type: sequelize.QueryTypes.SELECT });

  res.send(JSON.stringify({ accommodation, availability }));
});

app.get('/bookings/:accommodationid/reserve/:startDate&:endDate', async (req, res) => {
  const start = new Date(req.params.startDate);
  const current = new Date(req.params.endDate);

  const availability = await sequelize.query(`SELECT reservations.date FROM reservations INNER JOIN accommodation INNER JOIN guests 
  WHERE reservations.accommodation_id = accommodation.id AND guests.id = reservations.guest_id AND accommodation.id = ${req.params.accommodationid}
  AND reservations.date BETWEEN CAST('${dateFormatter(start)}' AS DATE) AND CAST('${dateFormatter(current)}' AS DATE);`,
  { type: sequelize.QueryTypes.SELECT });

  res.send(JSON.stringify({ availability }));
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
