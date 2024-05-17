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
