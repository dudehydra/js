const STARTPAGE = `5`;
let currentScreen = 0;
const Main = document.querySelector(`.main`);
let pages = document.querySelector(`#templates`).content.children;
let container = document.createElement(`template`);
function changePages(pageNumber) {
  container.content.appendChild(pages[pageNumber].cloneNode(true));
  Main.innerHTML = ` `;
  Main.appendChild(container.content);
  currentScreen = pageNumber;
}

function keyPressHandler(evt) {
  const KEY_LEFT = 37;
  const KEY_RIGHT = 39;
  if (evt.altKey) {
    if (evt.keyCode === KEY_LEFT) {
      if (currentScreen === 0) {
        changePages(pages.length - 1);
      } else {
        changePages(currentScreen - 1);
      }
    } else if (evt.keyCode === KEY_RIGHT) {
      if (currentScreen === pages.length) {
        changePages(1);
      } else {
        changePages(currentScreen + 1);
      }
    }
  }
}
window.onload = changePages(STARTPAGE);
document.addEventListener(`keyup`, keyPressHandler);
