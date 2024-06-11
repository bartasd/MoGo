// DROP DOWN NAVIGATION MENU

const collMenu = document.getElementById("collapse");
const openDrop = document.getElementById("drop-down");
const exitDrop = document.getElementById("exit-drop-down");

let dropDownActive = false;

function changeIconHovered() {
  collMenu.classList.remove("fa-bars");
  collMenu.classList.add("fa-times");
}

function changeIconStill() {
  collMenu.classList.remove("fa-times");
  collMenu.classList.add("fa-bars");
}

function openDropDown() {
  collMenu.style.display = "none";
  openDrop.classList.add("active-drop-down");
}

function exitDropDown() {
  collMenu.style.display = "block";
  openDrop.classList.remove("active-drop-down");
}

if (collMenu) {
  collMenu.addEventListener("mouseover", changeIconHovered);
  collMenu.addEventListener("mouseout", changeIconStill);
  collMenu.addEventListener("click", openDropDown);
}

if (exitDrop) {
  exitDrop.addEventListener("click", exitDropDown);
}

// --------------------------------------------------
const map = document.getElementById("map");
const mapBtn = document.getElementById("mapButton");
const bkg = document.getElementById("bkg3");
const theMap = document.getElementById("theMap");

let isOpened = false;
let isBigEnough = true;

const resizeImg = (isOpened = true) => {
  const viewWide = map.clientWidth;
  if (isOpened && viewWide < 500) {
    isBigEnough = false;
    console.log(viewWide);
    const newMapHeight = (25 / 24) * viewWide;
    theMap.style.width = `${viewWide}px`;
    theMap.style.left = 0;
    bkg.style.height = `${240 + newMapHeight}px`;
  }
  if (isOpened && viewWide >= 500 && !isBigEnough) {
    isBigEnough = true;
    theMap.style.width = "480px";
    theMap.style["left"] = null;
  }
};

const openMap = (e) => {
  isOpened = !isOpened;
  e.target.innerText = isOpened ? "CLOSE MAP" : "OPEN MAP";
  isOpened ? map.classList.add("map-open") : map.classList.remove("map-open");
  map.style.height = isOpened ? "800px" : "200px";
  bkg.style.height = isOpened ? "100%" : "200px";
  resizeImg(isOpened);
};

if (map) {
  mapBtn.addEventListener("click", (e) => {
    openMap(e);
  });
}

if (theMap) {
  window.addEventListener("resize", resizeImg);
}

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
  fetch("https://bartasd.github.io/MoGo/data/comments.json")
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
  fetch("https://bartasd.github.io/MoGo/data/comments.json")
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
const socialIcons = document.getElementsByClassName("social-icon");
const changeColor = (e) => {
  const src = e.target.src;
  const letter = src[src.length - 5];
  const changeTo = letter == "p" ? "w" : "p";
  const newSrc = src
    .split("")
    .map((e, i) => (i == src.length - 5 ? changeTo : e))
    .join("");
  e.target.src = newSrc;
};

if (socialIcons[0]) {
  for (let i = 0; i < socialIcons.length; i++) {
    socialIcons[i].addEventListener("mouseover", (e) => {
      changeColor(e);
    });
    socialIcons[i].addEventListener("mouseout", (e) => {
      changeColor(e);
    });
  }
}
// WHAT WE DO SECTION

const drops = document.getElementsByClassName("drop");
const angles = document.getElementsByClassName("angle");
const isDropped = [false, false, false];

function openDroper(i, close = false) {
  if (!isDropped[i] && !close) {
    for (let idx = 0; idx < drops.length; idx++) {
      if (idx == i) {
        drops[idx].classList.add("dropped-list");
        isDropped[idx] = true;
        angles[idx].classList.add("fa-angle-up");
        angles[idx].classList.remove("fa-angle-down");
      } else {
        drops[idx].classList.remove("dropped-list");
        isDropped[idx] = false;
        angles[idx].classList.add("fa-angle-down");
        angles[idx].classList.remove("fa-angle-up");
      }
    }
  } else if (isDropped[i] && close) {
    drops[i].classList.remove("dropped-list");
    isDropped[i] = false;
    angles[i].classList.add("fa-angle-down");
    angles[i].classList.remove("fa-angle-up");
  }
}

if (drops.length > 0) {
  for (let i = 0; i < drops.length; i++) {
    drops[i].addEventListener("click", () => {
      openDroper(i);
    });
    angles[i].addEventListener("click", (e) => {
      e.stopPropagation();
      openDroper(i, true);
    });
  }
} else {
  isDropped.forEach((_, i) => {
    isDropped[i] = false;
  });
}

// --------------------------------------------------
