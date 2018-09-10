export default function changePages(page) {
  debugger;
  const Main = document.querySelector(`.main`);
  Main.innerHTML = ` `;
  console.log(page);
  Main.appendChild(page);
};
