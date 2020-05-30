"use strict";

// Модальное окно

createPopupWindow();

function createPopupWindow() {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.insertAdjacentHTML(
    "beforeend",
    `<div class="popup-container">
        <div class="popup-content">
           <button class="popup-close">&times;</button>
           <h4 class="popup-header">Hello, World</h4>
        </div>
    </div>`
  );

  document.body.insertAdjacentElement("beforeend", popup);
}

// Кнопка закрытия модального окна

const closeButton = getSelector("popup-close");
const popup = getSelector("popup");

function getSelector(selector) {
  return document.querySelector(`.${selector}`);
}

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

// Кнопка 1

const hideButton = getHideButtonEl();
const hiddenBlock = getHiddenBlockEl();
bindListenerToHideBtn(hideButton, makeWindowHide);

function getHideButtonEl() {
  return document.querySelector(".js-btn-hide");
}

function getHiddenBlockEl() {
  return document.querySelector(".hidden");
}

function bindListenerToHideBtn(element, logic) {
  element.addEventListener("click", logic);
}

function makeWindowHide() {
  hiddenBlock.classList.toggle("collapse");
}

// Кнопка 2

let parentNode = getParentNode();
let swapButton = getSwapButton();
bindListenerToSwapBtn(swapButton, swapNodeWrapper(parentNode));

function getParentNode() {
  return document.querySelector(".row");
}
function getSwapButton() {
  return document.querySelector(".js-btn-swap");
}
function bindListenerToSwapBtn(element, logic) {
  element.addEventListener("click", logic);
}
function swapNodeWrapper(parent) {
  let clone = parent.children[1].cloneNode(true); // div1
  let clone1 = parent.children[3].cloneNode(true); // div2

  return function swapNode() {
    parent.removeChild(parent.children[1]);
    parent.removeChild(parent.children[2]);
    parent.insertBefore(clone1, parent.children[1]);
    parent.insertBefore(clone, parent.children[3]);
    [clone, clone1] = [clone1, clone];
  };
}
