const db = require('./index');
const Models = require('./models/index');

db.drop();
db.sync({ force: true, match: /bookings$/ })
  .then(() => Models.Guest.sync())
  .then(() => Models.Accommodation.sync())
  .then(() => Models.Reservation.sync())
  .then(() => console.log('Tables created successfully'))
  .catch(err => (
    console.log(err)));
