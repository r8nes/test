// Кнопка 1

let hideButton = createHideButtonEl();
let hiddenBlock = createHiddenBlockEl();
bindListenerToHideButton(hideButton, makeWindowHide);
restoreHideButtonData();

function createHideButtonEl() {
  return document.querySelector(".js-btn-hide");
}

function createHiddenBlockEl() {
  return document.querySelector(".hidden");
}

function bindListenerToHideButton(element, logic) {
  element.addEventListener("click", logic);
}

function makeWindowHide() {
  hiddenBlock.classList.toggle("hide");
}

function restoreHideButtonData() {}

// Кнопка закрытия

let close = document.querySelector(".popup-close");
let popup = document.querySelector(".popup");
close.addEventListener("click", () => {
  popup.style.display = "none";
});
