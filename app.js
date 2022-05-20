const inputOfCards = document.getElementById("number-of-cards");
const createBoardForm = document.getElementById("create-board-form");
const memoryBoard = document.getElementById("memorama-board");
const memoryBoardTitle = document.getElementById("memorama-board-title");
const createBoardButton = document.getElementById("create-board-button");

inputOfCards.addEventListener("input", (e) => {
  if (e.target.value % 2 !== 0 || e.target.value < inputOfCards.min) {
    inputOfCards.style.border = "2px solid red";
    createBoardButton.disabled = true;
  } else {
    inputOfCards.style.border = "2px solid #1CFEBA";
    createBoardButton.disabled = false;
  }
});

createBoardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const numberOfCards = inputOfCards.value;
  try {
    memoryBoardTitle.innerHTML = "Creating board...";
    getImagesForCards(numberOfCards);
  } catch (error) {
    console.log(error);
  }
});

async function getImagesForCards(cards) {
  const actualImagesNeeded = cards / 2;
  let imagesForCards = [];
  for (let index = 0; index < actualImagesNeeded; index++) {
    // const newImage = await axios({
    //   method: "get",
    //   url: `https://picsum.photos/200`,
    // });
    imagesForCards.push(`<img src="https://picsum.photos/200/300?random=${index}">`)
    console.log(imagesForCards);
  }
}
