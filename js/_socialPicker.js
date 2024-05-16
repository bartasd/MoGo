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
