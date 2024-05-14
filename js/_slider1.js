// FIRST SLIDER

let comments = [];
const slideLeft = document.getElementById("slideLeft");
const slideRight = document.getElementById("slideRight");
const commentatorName = document.getElementById("commentator");
const commentatorText = document.getElementById("commentator-text");
let id = 0;

async function changeCommentator(negative = false, initial = false) {
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
      commentatorName.innerText = data[id].name;
      commentatorText.innerText = data[id].comment;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

if (slideLeft) {
  slideLeft.addEventListener("click", () => changeCommentator(true));
  slideRight.addEventListener("click", () => changeCommentator(false));
}

changeCommentator(true, true);

// --------------------------------------------------
