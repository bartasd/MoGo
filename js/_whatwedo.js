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
