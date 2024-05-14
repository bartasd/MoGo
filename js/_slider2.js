// SECOND SLIDER

let comments2 = [];
const images = [
  "./assets/someMan.png",
  "./assets/ppl1.png",
  "./assets/ppl2.png",
];
const sldrLeft = document.getElementById("sldrLeft");
const sldrRight = document.getElementById("sldrRight");
const commName = document.getElementById("sldr-commentator");
const commText = document.getElementById("sldr-text");
const image = document.getElementById("ppl-image");
let idx = 0;

async function changeSldrCommentator(negative = false, initial = false) {
  if (!initial) {
    negative ? id-- : id++;
    if (id == -1) {
      id = 2;
    } else if (id == 3) {
      id = 0;
    }
  }
  fetch("http://127.0.0.1:8080/data/comments.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      commName.innerText = data[id].name;
      commText.innerText = data[id].comment;
      image.setAttribute("src", images[id]);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

if (sldrLeft) {
  sldrLeft.addEventListener("click", () => changeSldrCommentator(true));
  sldrRight.addEventListener("click", () => changeSldrCommentator(false));
}

changeSldrCommentator(true, true);

// --------------------------------------------------
