/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}
const header = document.querySelector("h1#header");
console.log(header);
header.addEventListener('click', function(e) {
  toggleColor(document.querySelector("h1#header"))
});

/***** Deliverable 2 *****/

//We first need to grab our form DONE
//Then we need to make a submit event DONE
//We need to grab the info from our inputs and store it into an object
//Then we need to create a new player
//Then we need to put that player into our DOM
let form = document.querySelector("#new-player-form");

form.addEventListener('submit', function(e){
  e.preventDefault();
  let player =   {
    number: e.target.number.value,
    name: e.target.name.value,
    nickname: e.target.nickname.value,
    photo: e.target.photo.value
  };
  renderPlayer(player);
})




/***** Deliverable 3 *****/


playerContainer.addEventListener("click", e => {
  console.log(e.target);
  if (e.target.matches("button.like-button")) {
    let likes = playerContainer.querySelector("p.likes").innerText
    let likeNum = likes.replace("likes", "");
    console.log(likeNum);
    likeNum = parseInt(likeNum, 10);
    likes = likeNum + 1 + " likes";
    playerContainer.querySelector("p.likes").innerText = likes
  }
});

