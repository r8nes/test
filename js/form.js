// Обработка формы

const formButton = getSelector('.form-btn');
const mainForm = getSelector('.form-main');
let out = getSelector('.inner-main');
let getData = callLogic(formButton);


function getSelector (selector) {
   return document.querySelector(`${selector}`);
}

// Логика кнопки

function callLogic(element) {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    dataRequest();
  });
}

// Обработчик формы

function parseForm(form, formHandler) {

  // проверяем форма ли это
  if (!form || form.nodeName !== 'FORM') {
    return false;
  }

  let record = [];

  for (let i = 0; form.elements.length > i; i++) {
    // пропускаем пустые элементы
    if (!form.elements[i].name) {
      continue;
    }

    // проверяем что это за форма
    switch (form.elements[i].nodeName) {
      case 'INPUT':
        switch (form.elements[i].type) {
          case 'text':
            if (!form.elements[i].value) {
              return false;
            } else {
              formHandler(record, form, i);
              break;
            }
        }
        break;
      case 'SELECT':
        switch (form.elements[i].type) {
          case 'select-one':
            formHandler(record, form, i);
            break;
        }
        break;
    }
  }
  let convert = JSON.stringify(record);
  return convert;
}

// Преобразователь элементов формы в объект

function putObjectInArr(arr, el, itr) {
  return arr.push({
    key: el.elements[itr].name,
    value: el.elements[itr].value,
  });
}

// А-ля Запрос
// ****************
// Это мое самое слабое место, если честно.

function dataRequest() {
  out.innerHTML = '...getting data...';

  return new Promise((resolve) => {
    setTimeout(() => {
      let drawData = parseForm(mainForm, putObjectInArr);

      if (!drawData) {
         out.innerHTML = new Error('...SOMTHING GONE WRONG!<br/> Complete form, please.')
      } else {
        resolve(drawData);
      }

    }, 3000);
  }).then((data) => {
    out.innerHTML = data;
  });
}

// ***********
// Я знаю, что тут fetch или xhr, но я пока не имею представление, как обрабатывать и отсылать полученные данные из формы. В это надо углубляться не на тех.задании.
