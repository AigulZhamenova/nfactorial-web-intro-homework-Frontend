'use strict';

// Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// ​

let age = prompt("Сколько вам лет?");
let checkAge = (age>18)?true: confirm ("Родители разрешили?");


// Функция pow(x,n)
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3*3 = 9
// pow(3, 3) = 3*3*3 = 27
// pow(1, 100) = 1*1 * ...* 1 = 1


function pow(x,n){
    return x**n;
}

console.log(pow(5,3));

// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function()  { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no();
    }

ask(
    "Вы согласны?",
    () => alert("Вы согласились."), 
    () => alert("Вы отменили выполнение.")
);
 
// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a,b)=>b-a);

alert( arr ); // 8, 5, 2, 1, -10



// Трансформировать в массив имён
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let user = [vasya, petya, masha];

let names = user.map(item => item.name);

alert( names ); // Вася, Петя, Маша



// Трансформировать в объекты
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// Например:

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya1, petya1, masha1 ];

let usersMapped = users.map(user =>(
{
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин



// Получить средний возраст
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством ageи возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr2 = [ vasya, petya, masha ];

function getAverageAge(u){
    return u.reduce((a,b)=>a+b.age,0)/u.length;
}

alert(getAverageAge(arr2));















