import {getElementFromTemplate as getTemplate} from './elementFromTemplate';
console.log(getTemplate(`<h2>kekes</h2>`));

const Main = document.querySelector(`.main`);
function changePages(page) {
  Main.innerHTML = ` `;
  Main.appendChild(page);
}
window.onload = changePages(getTemplate);


