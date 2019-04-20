const faker = require('faker');
const file = require('fs').createWriteStream('./guest.csv');


(async () => {
    for (let i = 0; i <= 1000; i += 1) {
      const guestName = faker.name.findName()
      const createdAt = new Date().toISOString();
      if(i === 0) {
        const header = '_id, name, createdAt, updatedAt\n'
        if(!file.write(header)) {
          await new Promise(resolve => file.once('drain', resolve))
        }
      }
      else {
        const row = `${i}, ${guestName}, ${createdAt}, ${createdAt}\n`;
        if(!file.write(row)) {
          await new Promise(resolve => file.once('drain', resolve));
        }
      }
    }
})();
