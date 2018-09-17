import getElementFromTemplate from './../elementFromTemplate';
import changePages from './../changePages';
import getScreenGenre from './main--level-genre';
import tracks from '../moduls/tracks';


const anwersShow = 3;
function createAnswers(options) {
  let answers = [];
  const option = Array.from(options);
  option.map(([index, name]) => {
    answers.push(`<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}" />
          <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${name.imgSrc}">
            ${name.title}
          </label>
        </div>`);
  });
  return answers.slice(0, anwersShow).join(` `);
}


let screenArtist = `<section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${createAnswers(tracks)}
      </form>
    </div>
  </section>`;


export default function getScreenArtist() {
  let screenDom = getElementFromTemplate(screenArtist);
  let allAnswers = screenDom.querySelectorAll(`.main-answer-wrapper`);
  const player = screenDom.querySelector(`.player-wrapper`);
  const file = `js/Orison.mp3`;
  window.initializePlayer(player, file, false, true);

  allAnswers.forEach(function (elem) {
    elem.addEventListener(`click`, function () {
      changePages(getScreenGenre());
    });
  });
  return screenDom;
}
