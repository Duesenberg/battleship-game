//select element
const selectDOMel = (selector) => {
  const el = document.querySelector(`${selector}`);
  return el;
}

//create node list
const selectDOMelAll = (selector) => {
  const el = document.querySelectorAll(selector);
  return el;
}

//create and append element to parent
const insertDOMel = (element, parent) => {
  const el = document.createElement(element);
  parent.appendChild(el);
  return el;
}

export {selectDOMel, selectDOMelAll, insertDOMel};