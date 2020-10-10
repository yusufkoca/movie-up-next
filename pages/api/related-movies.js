export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(relatedMoviesMockData));
}

const relatedMoviesMockData = [
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot:
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.2/10" },
      { Source: "Rotten Tomatoes", Value: "84%" },
      { Source: "Metacritic", Value: "70/100" },
    ],
    Metascore: "70",
    imdbRating: "8.2",
    imdbVotes: "1,283,912",
    imdbID: "tt0372784",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Warner Brothers, Di Bonaventura Pictures",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Get Out",
    Year: "2017",
    Rated: "R",
    Released: "24 Feb 2017",
    Runtime: "104 min",
    Genre: "Horror, Mystery, Thriller",
    Director: "Jordan Peele",
    Writer: "Jordan Peele",
    Actors:
      "Daniel Kaluuya, Allison Williams, Catherine Keener, Bradley Whitford",
    Plot:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    Language: "English",
    Country: "USA, Japan",
    Awards: "Won 1 Oscar. Another 152 wins & 201 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.7/10" },
      { Source: "Rotten Tomatoes", Value: "98%" },
      { Source: "Metacritic", Value: "85/100" },
    ],
    Metascore: "85",
    imdbRating: "7.7",
    imdbVotes: "473,284",
    imdbID: "tt5052448",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Universal Pictures, QC Entertainment, Blumhouse Productions",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Terminator",
    Year: "1991",
    Rated: "N/A",
    Released: "N/A",
    Runtime: "39 min",
    Genre: "Short, Action, Sci-Fi",
    Director: "Ben Hernandez",
    Writer:
      "James Cameron (characters), James Cameron (concept), Ben Hernandez (screenplay)",
    Actors: "Loris Basso, James Callahan, Debbie Medows, Michelle Kovach",
    Plot: "A cyborg comes from the future, to kill a girl named Sarah Lee.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster: "N/A",
    Ratings: [{ Source: "Internet Movie Database", Value: "6.1/10" }],
    Metascore: "N/A",
    imdbRating: "6.1",
    imdbVotes: "28",
    imdbID: "tt5817168",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
];
