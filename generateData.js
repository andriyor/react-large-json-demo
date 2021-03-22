const fs = require('fs');
const path = require('path');

const faker = require('faker');

const mainEmployeeProject = [...Array(10000)].map((value, index) => ({
  id: index + 1,
  name: faker.name.findName(),
  email: faker.internet.email(),
  about: faker.lorem.paragraph(6),
}));

fs.writeFileSync(path.resolve('src', 'data.json'), JSON.stringify(mainEmployeeProject, null, 2));
