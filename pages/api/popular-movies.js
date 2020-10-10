export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(popularMoviesMockData));
}

const popularMoviesMockData = [
  {
    Title: "Tenet",
    Year: "2020",
    Rated: "PG-13",
    Released: "03 Sep 2020",
    Runtime: "150 min",
    Genre: "Action, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Juhan Ulfsak, Jefferson Hall, Ivo Uukkivi, Andrew Howard",
    Plot:
      "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    Language: "English, Russian, Ukrainian, Estonian",
    Country: "UK, USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Rotten Tomatoes", Value: "71%" },
      { Source: "Metacritic", Value: "69/100" },
    ],
    Metascore: "69",
    imdbRating: "7.8",
    imdbVotes: "125,823",
    imdbID: "tt6723592",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Syncopy, Warner Bros. Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "John Wick",
    Year: "2014",
    Rated: "R",
    Released: "24 Oct 2014",
    Runtime: "101 min",
    Genre: "Action, Crime, Thriller",
    Director: "Chad Stahelski, David Leitch",
    Writer: "Derek Kolstad",
    Actors: "Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe",
    Plot:
      "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    Language: "English, Russian, Hungarian",
    Country: "USA, UK, China",
    Awards: "5 wins & 8 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.4/10" },
      { Source: "Rotten Tomatoes", Value: "87%" },
      { Source: "Metacritic", Value: "68/100" },
    ],
    Metascore: "68",
    imdbRating: "7.4",
    imdbVotes: "523,756",
    imdbID: "tt2911666",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Thunder Road Pictures, Defynite Films, 87eleven",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Platform",
    Year: "2000",
    Rated: "N/A",
    Released: "29 Aug 2001",
    Runtime: "154 min",
    Genre: "Drama, History",
    Director: "Zhangke Jia",
    Writer: "Zhangke Jia",
    Actors: "Hongwei Wang, Tao Zhao, Jing Dong Liang, Tian-yi Yang",
    Plot:
      "A theatre troupe from rural Fenyang struggles under the decline of communism and rise of popular culture in China in the 1980s.",
    Language: "Mandarin, Shanxi",
    Country: "China, Hong Kong, Japan, France",
    Awards: "9 wins & 8 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDFhZmQwNzktYzEwZS00MGU1LWIzOGUtNDhiNTMyY2YzNGVhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.4/10" },
      { Source: "Rotten Tomatoes", Value: "79%" },
      { Source: "Metacritic", Value: "76/100" },
    ],
    Metascore: "76",
    imdbRating: "7.4",
    imdbVotes: "2,335",
    imdbID: "tt0258885",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    Rated: "PG-13",
    Released: "27 Apr 2018",
    Runtime: "149 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Anthony Russo, Joe Russo",
    Writer:
      "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos, Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
    Actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    Plot:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    Language: "English",
    Country: "USA",
    Awards: "Nominated for 1 Oscar. Another 46 wins & 73 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.4/10" },
      { Source: "Rotten Tomatoes", Value: "85%" },
      { Source: "Metacritic", Value: "68/100" },
    ],
    Metascore: "68",
    imdbRating: "8.4",
    imdbVotes: "798,391",
    imdbID: "tt4154756",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Marvel Studios",
    Website: "N/A",
    Response: "True",
  },
];
