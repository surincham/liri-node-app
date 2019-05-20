require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var option = process.argv[2]
var search = process.argv.slice(3).join(" ");

if (option === 'concert-this') {
    console.log('concert');
    console.log(search);

}
if (option === 'spotify-this-song') {
    console.log('spotify-this-song')
    findSong();

}
if (option === 'movie-this') {
    console.log('movie-this')
}
if (option === 'do-what-it-says') {
    console.log('do-what-it-says')
}

function findSong() {
    spotify.search({
            type: 'track',
            query: search
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}