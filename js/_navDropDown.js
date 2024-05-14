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
