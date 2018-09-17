export default function changePages(page) {
  const Main = document.querySelector(`.main`);
  Main.innerHTML = ` `;
  Main.appendChild(page);
};
