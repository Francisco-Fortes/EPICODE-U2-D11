let container = document.querySelector(".container");
let cardImageHolder = document.querySelector(".card-img-top");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f47133a4famsh3a17d8e9eb43d0cp1807d9jsn1a7bb1b3544c",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",
  options
)
  .then((response) => response.json())
  .then((listOfSongs) => {
    for (song of listOfSongs.data) {
      console.log(song);
    }
  })
  .catch((err) => console.error(err));

//
fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=daft_punk",
  options
)
  .then((response) => response.json())
  .then((listOfSongs) => {
    for (song of listOfSongs.data) {
      console.log(song);
    }
  })
  .catch((err) => console.error(err));
