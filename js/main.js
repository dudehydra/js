const STARTPAGE = `5`;
let currentScreen = 0;
function changePages(pageNumber) {
  const Main = document.querySelector(`.main`);
  let pages = document.querySelector(`#templates`).content.children;
  let container = document.createElement(`template`);
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
      changePages(currentScreen - 1);
    } else if (evt.keyCode === KEY_RIGHT) {
      changePages(currentScreen + 1);
    }
  }
}
window.onload = changePages(STARTPAGE);
document.addEventListener(`keyup`, keyPressHandler);
