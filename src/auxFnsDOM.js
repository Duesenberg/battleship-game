// create and append element to parent
const insertDOMel = (element, parent, cls, textContent) => {
  const el = document.createElement(element);

  if (cls !== undefined) el.classList.add(cls);// add class only if specified

  // add clatextContent only if specified
  if (textContent !== undefined) el.textContent = textContent;

  parent.appendChild(el);
  return el;
};

// clear an element of all child nodes
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

export { insertDOMel, removeAllChildNodes };
