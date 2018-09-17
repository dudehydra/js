import getElementFromTemplate from './../elementFromTemplate';
import changePages from './../changePages';
import getScreenResult from './main--result';
import tracks from '../moduls/tracks';

const anwersShow = 4;
function createAnswers(options) {
  let answers = [];
  const option = Array.from(options);
  option.map(([index, name]) => {
    answers.push(`<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-${index}" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`);
  });
  return answers.slice(0, anwersShow).join(` `);
}
export let screen = `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
        ${createAnswers(tracks)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;


export default function getScreenGenre() {
  const screenDom = getElementFromTemplate(screen);
  let answerBtn = screenDom.querySelector(`.genre-answer-send`);
  let checkbox = screenDom.querySelectorAll(`input[name=answer]`);
  const file = `js/Orison.mp3`;
  const playerWrappers = [...screenDom.querySelectorAll(`.player-wrapper`)];

  for (let i = 0; i < playerWrappers.length; i++) {
    playerWrappers[i].addEventListener(`click`, (event)=>{
      event.preventDefault();
    });

    window.initializePlayer(playerWrappers[i], file, false, true);
  }

  answerBtn.setAttribute(`disabled`, `true`);
  checkbox.forEach(function (elem) {
    elem.addEventListener(`click`, function () {
      if (elem.checked) {
        answerBtn.removeAttribute(`disabled`);
      }
      else {
        answerBtn.setAttribute(`disabled`, `true`);
      }
    });
  });
  answerBtn.addEventListener(`click`, function () {
    changePages(getScreenResult());
  });

  return screenDom;
}
