const faker = require('faker');
const db = require('./index');
const Models = require('./models/index');

const generateGuestData = () => {
  const guestData = [];
  for (let i = 0; i < 100; i += 1) {
    guestData[i] = { name: faker.name.findName() };
  }
  return guestData;
};


const getRating = () => {
  const scores = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  return scores[faker.random.number({ min: 0, max: 10 })];
}

const getSpecial = () => {
  const extraRenders = [
    { above_avg_views: true,
      rare_find: false,
      hot_item: false,
    },
    { above_avg_views: false,
      rare_find: true,
      hot_item: false,
    },
    { above_avg_views: false,
      rare_find: false,
      hot_item: true,
    },
    { above_avg_views: false,
      rare_find: false,
      hot_item: false,
    }
  ]
  return extraRenders[faker.random.number({ min: 0, max: 3 })]
}

const generateAccommodationData = () => {
  const accommodationData = [];
  for (let i = 0; i < 100; i += 1) {
    const includeAddlFields = faker.random.boolean();
    const newAccData = {
      price_per_day: faker.finance.amount(60, 300, 2),
      cleaning_fee: faker.finance.amount(20, 80, 2),
      accommodations_tax: faker.finance.amount(0, 0.1, 2),
      general_tax: faker.finance.amount(0, 0.05, 2),
      rating_score: getRating(),
      number_of_ratings: faker.random.number({ min: 0, max: 1000 }),
      max_guests: faker.random.number({ min: 1, max: 11 }),
      number_viewing_listing: faker.random.number({ min: 0, max: 600 }),
      availability_last_updated: faker.date.between('2019-01-01', '2019-03-28'),
    };

    Object.assign(newAccData, getSpecial());

    if (includeAddlFields) {
      const addlFields = {
        guest_threshold: faker.random.number({ min: 2, max: 5 }),
        additional_guest_fee: faker.finance.amount(10, 30, 2),
        minimum_stay_length: faker.random.number({ min: 2, max: 5}),
        availability_end_date: faker.date.between('2020-04-01', '2022-01-01')
      };
      Object.assign(newAccData, addlFields);
    }

    accommodationData.push(newAccData);
  }
  return accommodationData;
};


const generateReservationsData = () => {
  const reservationData = [];

  for (let i = 0; i < 20000; i += 1) {
    const resData = {
      date: faker.date.between('2019-04-01', '2019-10-01'),
      accommodation_id: faker.random.number({ min: 1, max: 100}),
      guest_id: faker.random.number({ min: 1, max: 100}),
      total_adults: faker.random.number({ min: 2, max: 5 }),
      total_children: faker.random.number({ min: 2, max: 5 }),
      total_infants: faker.random.number({ min: 2, max: 5 }),
    }
    resData.total_guests = resData.total_adults + resData.total_children;
    reservationData.push(resData);
  }

  for (let i = 0; i < 30000; i += 1) {
    const resData = {
      date: faker.date.between('2019-04-01', '2022-01-01'),
      accommodation_id: faker.random.number({ min: 1, max: 100 }),
      guest_id: faker.random.number({ min: 1, max: 100}),
      total_adults: faker.random.number({ min: 2, max: 5 }),
      total_children: faker.random.number({ min: 2, max: 5 }),
      total_infants: faker.random.number({ min: 2, max: 5 }),
    }
    resData.total_guests = resData.total_adults + resData.total_children;
    reservationData.push(resData);
  }
  return reservationData;
};

db.drop();
db.sync({ force: true, match: /bookings$/ })
  .then(() => Models.Guest.bulkCreate(generateGuestData()))
  .then(() => Models.Accommodation.bulkCreate(generateAccommodationData()))
  .then(() => Models.Reservation.bulkCreate(generateReservationsData(), { ignoreDuplicates: true }))
  .then(() => console.log('Seeded Database successfully'))
  .catch(err => (
    console.log(err)));
