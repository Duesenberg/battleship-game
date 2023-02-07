//select element
const selectDOMel = (elName, selector) => {
  const el = document.querySelector(`${selector}`);
  elName = el;
}

//create node list
const selectDOMelAll = (elName, selector) => {
  const el = document.querySelectorAll(`${selector}`);
  elName = el;
}

//create and append element to parent
const insertDOMel = (elName, element, parent) => {
  const el = document.createElement(`${element}`);
  elName = el;
  parent.appendChild(elName);
}