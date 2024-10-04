'use strict';

//Футбольная команда

const football_team = 'Barcelona';  //const
let captain = 'Robert'; // string  let
let team = 10; //number
let win = true;  //boolean
let kick = null; //null
let defender; //undefined 

console.log("Футбольная команда: "+football_team);
console.log("Капитан команды: "+captain);
console.log(`В команде ${team} игроков`); 
console.log("Выиграш: "+win); 
console.log(kick);
console.log("Защитник: "+defender);

defender = "Pau";
console.log("Защитник: "+defender);

let opponents = "Real Madrid";
const play = `Сегодня игра с командой ${opponents}`;
console.log(play);

let player = {
    name: 'Marcus',
    age: 25,
    position: 'полузащитник',
}  //объект

console.log(player);

player.position = 'нападающий'; //изменение
console.log(player); 

player.start = 2015; //обавление
console.log(player);
 
delete player.age; //удаление
console.log(player);

delete player['start']; //удаление через прямые скобки
console.log(player); 




//Работа с объектами

let vehicle = {};
console.log(vehicle);

vehicle.brandName = 'BMW';
console.log(vehicle);

vehicle.model = 'X5';
console.log(vehicle);

vehicle.model = 'M1';
console.log(vehicle);

delete vehicle.model;
console.log(vehicle);



//Работа с перебором свойств в объектах

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

console.log(salaries);

let sum = 0;

for (let key in salaries) {
    sum+=salaries[key];
}

console.log(sum);















