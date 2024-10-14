'use strict';


// 1. Таблицу с `id="age-table"`.

let table = document.getElementById('age-table');

// 2. Все элементы `label` внутри этой таблицы (их три).

let labelAll = table.getElementsByTagName('label');

let labelAll1 = document.querySelectorAll('#age-table label');

// 3. Первый `td` в этой таблице (со словом «Age»).
 
table.getElementsByTagName('td')[0];
document.querySelector('#age-table td');

// 4. Форму `form` с именем `name="search"`.

let form = document.getElementsByName('search');

// 5. Первый `input` в этой форме.

form.getElementsByTagName('input')[0];

// 6. Последний `input` в этой форме.

let inputs = form.getElementsByTagName('input');

let lastInput = inputs[inputs.length - 1];






  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?    - BODY 
