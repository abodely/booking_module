const faker = require('faker');
const file = require("fs").createWriteStream("./accoms.csv");

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

(async () => {
  
  for (let i = 0; i <= 10000000; i += 1) {
    const price_per_day = faker.finance.amount(60, 300, 2)
    const cleaning_fee = faker.finance.amount(20, 80, 2)
    const accommodations_tax = faker.finance.amount(0, 0.1, 2)
    const general_tax = faker.finance.amount(0, 0.05, 2)
    const rating_score = getRating()
    const number_of_ratings = faker.random.number({ min: 0, max: 1000 })
    const max_guests = faker.random.number({ min: 1, max: 11 })
    const number_viewing_listing = faker.random.number({ min: 0, max: 600 })
    const availability_last_updated = faker.date.between('2019-01 =01', '2019-03-28').toISOString()
    const special = getSpecial()
    const guest_threshold =  faker.random.number({ min : 2, max: 5 })
    const additional_guest_fee = faker.finance.amount(10, 30, 2)
    const minimum_stay_length =  faker.random.number({ min: 2, max: 5})
    const availability_end_date = faker.date.between('2020-04-01', '2022-01-01').toISOString()
    const createdAt = new Date().toISOString();
    if(i === 0) {
      const header = '_id, price_per_day, cleaning_fee, additional_guest_fee, accommodations_tax, general_tax, rating_score, number_of_ratings, guest_threshold, max_guests, minimum_stay_length, availability_end_date, availability_last_updated, number_viewing_listing, above_avg_views, rare_find, hot_item, createdAt, updatedAt\n';
      if(!file.write(header)) {
        await new Promise(resolve => file.once('drain', resolve))
      }
    } else {
      const row = `${i}, ${price_per_day}, ${cleaning_fee}, ${additional_guest_fee}, ${accommodations_tax}, ${general_tax}, ${rating_score}, ${number_of_ratings}, ${guest_threshold}, ${max_guests}, ${minimum_stay_length}, ${availability_end_date}, ${availability_last_updated}, ${number_viewing_listing}, ${special.above_avg_views}, ${special.rare_find}, ${special.hot_item}, ${createdAt}, ${createdAt}\n`
      if(!file.write(row)) {
        await new Promise(resolve => file.once('drain', resolve))
      }
    }
  }
  console.log('DONE')
})();
