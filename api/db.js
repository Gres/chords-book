var generateSongs = require('./songs');
var generateAuthors = require('./authors');
let path = () => ({
  'songs': generateSongs,
  'authors': generateAuthors
})

module.exports = path;
