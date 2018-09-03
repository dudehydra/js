export const getElementFromTemplate = (template) => {
  let container = document.createElement(`template`);
  container.innerHTML = template;
  return container.content;
};
