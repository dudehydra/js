import getElementFromTemplate from './../elementFromTemplate';
import changePages from './../changePages';
import {screenArtist as artistPage} from './main--level-artist';

let screen = `<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
<button class="main-play">Начать игру</button>
<h2 class="title main-title">Правила игры</h2>
<p class="text main-text">
  Правила просты&nbsp;— за&nbsp;2 минуты дать
максимальное количество правильных ответов.<br>
Удачи!
</p></section>`;

export default function getScreen() {
  const screenDom = getElementFromTemplate(screen);
  let button = screenDom.querySelector(`.main-play`);
  button.addEventListener(`click`, function () {
    changePages(artistPage);
  });
  return screenDom;
}
