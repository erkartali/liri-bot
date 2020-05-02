require("dotenv").config();
var keys = require("./keys.js");

var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var dotenv = require("dotenv");
var omdb = require("omdb");

// console.log(process.argv);

var api = process.argv[2];
var value = process.argv[3];

switch (api) {
  case "concert-this":
    console.log("concert is working");
    concertThis();
    break;
  case "spotify-this-song":
    console.log("spotify is working");
    spotifyThis();
    break;
  case "movie-this":
    console.log("movie is working");
    movieThis();
    break;
  case "do-what-it-says":
    console.log("do what it says is working");
    break;

  default:
    break;
}

function concertThis() {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        value +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      console.log("venue:", response.data[0].venue.name);
      console.log(
        "location:",
        response.data[0].venue.city + ", " + response.data[0].venue.country
      );
      console.log(
        "date:",
        moment(response.data[0].datetime).format("MM/D/YYYY")
      );
    });
}

function spotifyThis() {
  var spotify = new Spotify(keys.spotify);
  var initial = false;
  if (value === undefined) {
    value = "the sign";
    initial = true;
  }
  spotify.search({ type: "track", query: value }).then(function(response) {
    var theThing = response.tracks.items[0];
    if (initial) {
      console.log(`Artist: ${theThing.album.artists[0].name}`);
      console.log(`Song title: ${theThing.name}`);
      console.log(`Preview Url: ${theThing.preview_url}`);
      console.log(`Album: ${theThing.album.name}`);
    } else {
      console.log(`Artist: ${theThing.album.artists[0].name}`);
      console.log(`Song title: ${theThing.name}`);
      console.log(`Preview Url: ${theThing.preview_url}`);
      console.log(`Album: ${theThing.album.name}`);
    }
  });
}

function movieThis() {
  var initial = false;
  if (value === undefined) {
    value = "Mr. Nobody";
    initial = true;
  }
  axios
    .get(`http://www.omdbapi.com/?apikey=trilogy&t=${value}`)
    .then(function(response) {
      if (initial) {
        console.log(`
            Title: ${response.data.Title}
            Year: ${response.data.Year}
            IMDB Rating: ${response.data.Rated}
            Rotten tomatoes rating: ${response.data.Ratings[1].Value}
            Country: ${response.data.Country}
            Language: ${response.data.Language}
            Plot: ${response.data.Plot}
            Actors: ${response.data.Actors}
            `);
      } else {
        console.log(`
            Title: ${response.data.Title}
            Year: ${response.data.Year}
            IMDB Rating: ${response.data.Rated}
            Rotten tomatoes rating: ${response.data.Ratings[1].Value}
            Country: ${response.data.Country}
            Language: ${response.data.Language}
            Plot: ${response.data.Plot}
            Actors: ${response.data.Actors}
      `);
      }
    });
}
