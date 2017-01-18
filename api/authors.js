var Faker = require('faker');
Faker.locale = "ru";
module.exports = function generateAuthors() {
  let authors = [];
  for (let id = 0; id < 5; id++) {
    authors.push({
      "id": id,
      "name": Faker.internet.userName(),
      "avatar": Faker.image.people(32,32)
    })
  }
  return authors
}();
