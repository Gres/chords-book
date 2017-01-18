var Faker = require('faker');
Faker.locale = "ru";
var generateAuthors = require('./authors');
module.exports = function generateSongs() {
  let songs = [];
  for (let id = 0; id < 10; id++) {
    songs.push({
      "id": id,
      "name": Faker.lorem.words(),
      "author": Faker.random.arrayElement(generateAuthors).id,
      "text": Faker.lorem.paragraphs(5),
      "created": Faker.date.past(),
    })
  }
  return songs
}();

