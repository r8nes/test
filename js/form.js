// Обработка формы

let formButton = document.querySelector('.form-btn');
buttonLogic(formButton);

let formMain = document.querySelector('.form-main');

function buttonLogic(element) {
  element.addEventListener('click', (e) => {
     e.preventDefault();
     parseForm(formMain);
  });
}

window.formMain = formMain;

function parseForm(form) {
  // проверяем форма ли это
  if (!form || form.nodeName !== 'FORM') {
    return false;
  }
  let formData = [];

  for (let i = 0; form.elements.length > i ; i++) {
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
              break;
           }
           else {
           formData.push(form.elements[i].name+ ': ' + form.elements[i].value);
           break;}
        }
        break;
        case 'SELECT':
           switch (form.elements[i].type) {
              case 'select-one':
                 formData.push(form.elements[i].name + ': ' + form.elements[i].value);
                 break;
           }
           break;
           case 'BUTTON':
              switch (form.elements[i].type) {
                 case 'submit':
                    formData.push(form.elements[i].name + ': ' + form.elements[i].value + ',');
                    break;
                  }
                  break;
    }
  }
  // выводим 
//   let arr = formData.map(el => {
//    return {
//      image_id: el
//    };
//  });


 console.log(formData);
}
