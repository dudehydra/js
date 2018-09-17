import getElementFromTemplate from './../elementFromTemplate';
import changePages from './../changePages';
import getScreenArtist from './main--level-artist';
import gameInitState from '../moduls/gameInitState';
import {header} from '../moduls/header';

let screen = `<section class="main main--welcome">
  <section class="logo" title="${header.logo}"><h1>${header.logo}</h1></section>
<button class="main-play">Начать игру</button>
<h2 class="title main-title">${header.title}</h2>
<p class="text main-text">
  Правила просты&nbsp;— за&nbsp;2 минуты дать
максимальное количество правильных ответов.<br>
Удачи!
</p></section>`;

export default function getScreen() {
  const screenDom = getElementFromTemplate(screen);
  let button = screenDom.querySelector(`.main-play`);
  button.addEventListener(`click`, function () {
    const gameState = Object.assign({}, gameInitState);
    gameState.levelArtist = Object.assign({}, gameInitState.levelArtist, {levelHistory: new Map()});
    gameState.levelGenre = Object.assign({}, gameInitState.levelGenre);
    console.log(gameState);
    changePages(getScreenArtist());
  });
  return screenDom;
}
