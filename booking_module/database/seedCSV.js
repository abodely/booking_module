const db = require ('./index');

db.query(`COPY reservations FROM '/Users/williamwong/Downloads/coding/SDC/booking_module/database/reservation2.csv' DELIMITER ',' CSV HEADER`)
  .then(console.log('success'))
  .catch(err => console.log(err))