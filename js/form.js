// Обработка формы

const formButton = document.querySelector(".form-btn");
const mainForm = document.querySelector(".form-main");
const input = document.querySelector(".form-input");
let out = document.querySelector(".inner-main");
let getData = buttonLogic(formButton);

function buttonLogic(element) {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    dataRequest();
  });
}

// обработчик формы

function parseForm(form, handler) {
  // проверяем форма ли это
  if (!form || form.nodeName !== "FORM") {
    return false;
  }
  let formData = [];

  for (let i = 0; form.elements.length > i; i++) {
    // пропускаем пустые элементы
    if (!form.elements[i].name) {
      continue;
    }
    // проверяем что это за форма
    switch (form.elements[i].nodeName) {
      case "INPUT":
        switch (form.elements[i].type) {
          case "text":
            if (!form.elements[i].value) {
              return false;
            } else {
              handler(formData, form, i);
              break;
            }
        }
        break;
      case "SELECT":
        switch (form.elements[i].type) {
          case "select-one":
            handler(formData, form, i);
            break;
        }
        break;
      case "BUTTON":
        switch (form.elements[i].type) {
          case "submit":
            handler(formData, form, i);
            break;
        }
        break;
    }
  }
  let convert = JSON.stringify(formData);
  return convert;
}

// преобразователь элементов формы в объект

function putObjectInArr(arr, el, itr) {
  return arr.push({
    key: el.elements[itr].name,
    value: el.elements[itr].value,
  });
}

// эмулирую запрос
// ****************
// это мое самое слабое место, если честно

function dataRequest() {
  out.innerHTML = "...getting data...";

  return new Promise((resolve) => {
    setTimeout(() => {
      let draw = parseForm(mainForm, putObjectInArr);

      if (!draw) {
        out.innerHTML = `...SOMTHING GONE WRONG!<br/> Complete form, please.`;
      } else {
        resolve(draw);
      }
    }, 3000);
  }).then((data) => {
    out.innerHTML = data;
  });
}

// ***********
// я знаю, что тут fetch или xhr, но в это надо углубляться не на тех.задании
