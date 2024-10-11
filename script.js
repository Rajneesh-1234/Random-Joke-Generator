const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

btn.addEventListener("click", () => {
  getJoke();
});

function getJoke() {
  jokeContainer.classList.remove("fade");
  fetchContent(url);
}

async function fetchContent(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let data = await response.json();
    displayJoke(data);
  }
}

function displayJoke(data) {
  let joke = data.joke;
  jokeContainer.innerHTML = `${joke}`;
  jokeContainer.classList.add('fade');
}
