let cardContainer = document.querySelector(".row");

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica") // ,options is no need it on this API
  .then((response) => response.json())
  .then((response) => {
    console.log(response.data);
    let musicInfo = response.data;
    console.log(musicInfo);
    for (let i = 0; i < musicInfo.length; i++) {
      let allInfo = musicInfo[i];
      console.log(allInfo);
      let card = document.createElement("div");
      card.className = "col-sm-6 col-md-4 col-3 p-sm-2 p-md-2";
      card.innerHTML = `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src=${allInfo.album.cover} alt="${allInfo.album.title} cover">
      <div class="card-body">
        <h5 class="card-title">${allInfo.title}</h5>
        <p class="card-text">${allInfo.album.title}</p>
      </div>
    </div>`;

      cardContainer.appendChild(card);
      console.log(musicInfo[i].music);
    }
  })
  .catch((err) => console.error(err));
