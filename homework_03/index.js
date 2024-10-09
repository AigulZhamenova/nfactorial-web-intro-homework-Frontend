'use strict';

// ### Тренируемся общаться с пользователем посредством alert / confirm / prompt.
// Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. Запишите все в объект. И выведите в консоли.
let user={
    name: prompt ('Как вас зовут?', ''),
    age: prompt ('Сколько вам лет?', ''),
    gender: confirm('Вы мужчина?')
}

let text;
if (user.gender == true) {
    text = "Вы мужчина";
  } 

else {
    text = "Вы женщина";
  }

alert(`Имя: ${user.name}\nВзраст: ${user.age}\n${text}`);

// ### Работа с операторами.
// 1. Используя конструкцию `if..else`, напишите код, который получает число через `prompt`, а затем выводит в `alert`.

let number = prompt('Введите число', '');
number = Number(number);
isNaN(number)
if (!isNaN(number)){
    alert(`Вы ввели число: ${number}`); 
}
else{
    alert(`Ошибка. Это не число.`); 
}

// Работа с условиями.
// Перепишите этот блок кода с использованием оператора switch.

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch (a){
    case 0:  alert(0); break;
    case 1:  alert(1); break;
    case 2:  case 3:  alert('2,3'); break;
    // case 3:  alert('2,3'); break;
}


// ### Работа с циклами(loops).

// 1. Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.

let sum=0;
for (let i=1; i<=100; i++){

    if(i%2==0){
        sum+=i;
    }
}
console.log(sum);

// 2.  Перепишите цикл `for` на `while`.

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

let i=0;
while(i<3){
    alert( `number ${i}!` );
    i++;
}