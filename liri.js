require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");


// var option = process.argv[2]
// var search = process.argv.slice(3).join(" ");

// if (option === 'concert-this') {
//     findConcert();
// }

// if (option === 'spotify-this-song') {
//     findSong();
// }

// if (option === 'movie-this') {
//     findMovie();
// }

// if (option === 'do-what-it-says') {
//     doOption();
// }

switch(command){
    case 'concert-this': 
    findConcert();

    case 'spotify-this-song':
    findSong();

    case 'movie-this':
    findMovie();

    case 'do-what-it-says':
    doOption();
}


// concert-this
function findConcert() {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log("Artist: " + search);
            console.log("Name of Venue: " + response.data.venue.name);
            console.log("Location of Venue: " + response.data.venue.city + ", " + response.data.venue.country);
            console.log("Date: " + response.data.datetime);
        });
}

// movie-this
function findMovie() {
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Released);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

// spotify-this-song
function findSong() {
    spotify.search({
            type: 'track',
            query: search
        })
        .then(function (response) {
            console.log("Artist: " + data.tracks.items);
        })
        .catch(function (err) {
            console.log(err);
        });
}

// do-what-it-says
function doOption() {

}