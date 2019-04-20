const faker = require('faker')
const file = require("fs").createWriteStream("./reservation.csv");



(async() => {
  for (let i = 0; i <= 40000000; i += 1) {
    const date = faker.date.between('2019-04-01', '2019-10-01').toISOString()
    const accommodation_id = faker.random.number({ min: 1, max: 10000000 })
    const guest_id = faker.random.number({ min: 1, max: 1000})
    const total_adults = faker.random.number({ min: 2, max: 5 })
    const total_children = faker.random.number({ min: 2, max: 5 })
    const total_infants = faker.random.number({ min: 2, max: 5 })
    const total_guests = total_adults + total_children;
    const createdAt = new Date().toISOString();
    if(i === 0) {
      const header = '_id, date, accommodation_id, guest_id, total_guests, total_adults, total_children, total_infants, createdAt, updatedAt\n'
      if(!file.write(header)) {
        await new Promise(resolve => file.once('drain', resolve));
      }
    } else {
      const row = `${i},${date},${accommodation_id},${guest_id},${total_guests},${total_adults},${total_children},${total_infants},${createdAt},${createdAt}\n`;
      if(!file.write(row)) {
        await new Promise(resolve => file.once('drain', resolve));
      }
    }
  }
  console.log('done')
})();


