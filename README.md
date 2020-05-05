# Title / Repository Name
Liri bot
liri-bot

## About / Synopsis

Liri bot is a node app that allows users to get information on a song, movie or concert by entering the desired info in the command line

## Organization

The app has four main functions and a switch statement that determines which of the functions to run based on the user input. The functions are ConcertThis(), spotifyThis(), movieThis() and doThis() the first three querry the corresponding apis to get information based on the user input and the doThis function reads from a random.txt file and uses that instead of user input.

## Usage

the following istructions will be run from the command line.

* first navigate into the liri-bot folder 
* to run any of the functions , you must first enter $ node liri.js followed by the function you want to run and the input you wish to get info on

spotify example
* node liri.js spotify-this-song thriller

concert example
* node liri.js concert-this nickelback

movie example
* node liri.js movie-this what about bob

do this example
* node liri.js do 'what it says'
* this is the only command that will run the doThis function
* this will use whatever is in the random.txt file

### Screenshots

https://user-images.githubusercontent.com/61101099/81124727-cddd7680-8efb-11ea-8cfa-fcb01b584636.png

https://user-images.githubusercontent.com/61101099/81124760-e51c6400-8efb-11ea-8dcc-2f9e966e7074.png

https://user-images.githubusercontent.com/61101099/81124776-f5344380-8efb-11ea-862d-811f86b7f831.png

https://user-images.githubusercontent.com/61101099/81124798-ff564200-8efb-11ea-8770-0cdda0082cb8.png

### Dependencies

* axios: "0.19.2",
* dotenv: "8.2.0",
* moment: "2.24.0",
* node-spotify-api: "1.1.1",
* omdb: "0.8.0"

### Link

https://github.com/erkartali/liri-bot
