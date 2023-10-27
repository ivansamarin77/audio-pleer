const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// xhr.setRequestHeader('Content-Type', 'application/json');

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) { // HTTP ошибка?
    // обработаем ошибку
    alert( 'Ошибка: ' + xhr.status);
    return;
  }

  // получим ответ из xhr.response
};

// xhr.onprogress = function(event) {
//   // выведем прогресс
//   console.log(`Загружено ${event.loaded} из ${event.total}`);
// };
