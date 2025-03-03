/*

'console' - статич обьект, а у него ф-ции:
'log' - вывести значение переменной
'dir' - массив или обьект

Любая переменная(ячейка памяти), кот мы создаем - это переменная динамического типа, 
которая позволяет нам чем-то ее инициализировать.
Изначально интовой переменной можно присвоить в дальнейшем строку или любой другой тип.
Здесь есть возм-ть передавать тело ф-ции в обьект.

Строгой типизации переменных нет
'var' мб и числом и строкой и булл и функцией и тд

'var' - глобальная переменная
'let' - локальная переменная (внутри цикла всегда их используем)
'const' - переменная, которую нельзя переинициализировать, а добавить в нее можно

в переменную можно записать функцию:
var b = function(a) {console.log(a)}

var c = new Date(); //здесь будет храниться текущая дата

*/

// 1 
// глобальные переменные и локальные переменные
// var f = 10;

// 'var'
// if(true){var f="abc";} 
// по идее эта переменная должна была умереть в 'if', но она вышла из него 
// и значение сохранилось
// из-за ассинхронности - когда мы присвоили второму 'var' значение 'abc' 
// в первом 'var' значение стало тоже 'abc'

// 'let'
// if(true){let f="abc";} 
// тк здесь переменная типа 'let' - она выходя из 'if' -умирает

// console.log(f);

// в цикле всегда переменные типа 'let', тк если в цикле будет серьезное 
// долгое действие - 'index' может сразу измениться до 10 (мы получим в 
// консоли - 0 и 10)
// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

// 2 
// функции
// // функция без 'return'
// function showindex(i){console.log(i)};
// for (let index = 0; index < 10; index++) {
//     showindex(index);
// }

// // функция с 'return'
// function showindex(i){return i};
// console.log(showindex("gdrfgdr"));

// можем записать рез-т предыдущей ф-ции в переменную
// let a = showindex(12.3);
// console.log(a);

// 3 
//массивы
// 3.1 
//const ar1=[1,2,3];

// 3.2
// const ar1=Array.from([1,2,3]);
// console.dir(ar1);

// 3.3 
// // добавление в константу (переопределить нельзя, а добавить можно)
// const ar2=[5,8,9];
// console.dir(ar2);
// ar2.push(4);
// console.dir(ar2);
// // ar2="hgdt"; // не сможем

// // можем обратиться к несуществующему индексу элемента в массиве 
// // - сразу добавится число
// // если обратились бы к сущ-му - произошла бы переинициализация
// ar2[5]=45; 
// // длина станет 6, хотя нет элемента по 4-му индексу
// // он будет 'null'
// console.dir(ar2);

// 4
// многомерные массивы
// ar3=[[1,2,3], [4,5,6], [7,8,9]];
// console.dir(ar3);

// for (let i = 0; i < 3; i++)
// for (let j = 0; j < 3; j++)
// {
//     ar3[i][j]*=10;
// }
// console.dir(ar3);

// 5 
// строки
// const c = "gthgthtrh 'retre' rtretrete";
// // двойные кавычки не будут видны
// console.log(c);

// const d = 'gtdhtgfthf "gdrfgdg" gdgdthgdth';
// // одинарные кавычки не будут видны
// console.log(d);

// // конкатенация строки и числа
// const a = 10;
// const b = '1';
// console.dir(a+b);

// 6
// Objects
// let obj1={
//     field1: "gfrdg",
//     field2: "10",
//     field3: new Date(),
//     field4: [5,8,1],
//     field5: true
// }
// console.dir(obj1);

// // добавление полей в обьект // добавляем 'field6', кот еще даже не сущ-ет
// obj1.field6=function f1(i) {
//     console.log(i+10);
// }
// console.dir(obj1);

// // копирование одного обьекта в другой ('field2' изменится в обоих обьектах)
// // при присваивании мы передаем адрес 'obj1' в 'obj2', а не значения
// obj2 = obj1;
// obj2.field2 = 100;
// console.dir(obj1);
// console.dir(obj2);

// // если создаем строку через 'string' - то получим не строку, а массив 'char'
// console.dir(obj1.field1); // здесь строка
// obj1.field7="Hello, world!"; // здесь строка
// obj1.field7=new String("Hello, world!"); // здесь массив
// console.dir(obj1.field7);

// 7 
// Classes 
// class Car {
//     constructor(maker, model) {
//         this.maker = maker;
//         this.model = model;
//     }
// }

// var c1= new Car("Audi", "RX1000");
// console.dir(c1);

// // присваивание
// var c2=c1;
// c1.maker="TOYOTA";
// c1.model="CAMRY";
// // поменяли только в 'c1', в 'c2' автоматически тоже поменялось
// // потому что класс - это ссылочный тип
// console.dir(c1);
// console.dir(c2);

// c1.year=2024;
// // 'year' - будет только в данном экземпляре класса (c1) и 'c2' 
// // (тк скопировали), а если создадим новый экземпляр класса 'Car' -
// // - там не будет поля 'year', в остальных только те поля, 
// // которые присутствуют в кон-ре
// var c3 = new Car("Toyota", "Seleca", "2024");
// console.dir(c2);
// console.dir(c1);
// console.dir(c3);

// 9
// Равенства
// строгое (сравнение не только значений, но и типов) 
// нестрогое (сравнение только значений) - приводит к примитивным типам

// let a = 10;
// let b = '10';
// console.log(a==b);
// console.log(a===b);

// 10
// функции диалога с пользователем

// 10.1
// Alert
// alert("dyhgdthytdd");
// console.dir("rgyrdefyhtry")

// 10.2
// Confirm
// let a = confirm("gdgtdhgtdh");
// console.log(a);

// 10.3
// Prompt
// // из 'Prompt' по умолчанию принимаеи строку
// // let user_years = prompt("Введите возраст");
// // console.log(user_years);

// // если хотим получить число - ставим знак '+'
// let user_years = +prompt("Введите возраст");
// console.log(typeof(user_years));

