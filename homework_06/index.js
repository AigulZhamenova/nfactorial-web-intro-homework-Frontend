'use strict';


// ### 1. [**Скрыть элемент по нажатию кнопки**]
// Добавьте JavaScript к кнопке `button`, чтобы при нажатии элемент `<div id="text">Remove me</div>` исчезал.

const btn = document.querySelector('button');
const div = document.querySelector('#text');
btn.addEventListener('click', (event)=>{
  div.hidden=true;
})
  

// ### 2. [**Какой обработчик запустится?**]

// В переменной `button` находится кнопка. Изначально на ней нет обработчиков.

// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

const button = document.querySelector('button');
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

// 1,2



// ### 3. [**Добавить кнопку закрытия**]
// Есть список сообщений.

// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия. 

// Результат, который должен получится можете [посмотреть по ссылке]

const panes = document.querySelectorAll('.pane');

panes.forEach((pane)=>{
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  pane.firstChild.onclick = () => pane.remove();
})



 // Карусель

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const gallery = document.querySelector('.gallery ul');
    const items = document.querySelectorAll('.gallery li');

    let position = 0;
    const itemWidth = items[0].clientWidth; 
    const visibleImages = 3; 
    const totalImages = items.length;

    next.addEventListener('click', () => {
      if (position > -(totalImages - visibleImages) * itemWidth) {
        position -= itemWidth; // Сдвигаем карусель влево
        gallery.style.transform = `translateX(${position}px)`;
      }
    });

    prev.addEventListener('click', () => {
      if (position < 0) {
        position += itemWidth; 
        gallery.style.transform = `translateX(${position}px)`;
      }
    });


     // Создать раскрывающееся меню

    let menuElem = document.getElementById('sweeties');
    let titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };