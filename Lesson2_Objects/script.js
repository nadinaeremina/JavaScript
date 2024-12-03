// https://metanit.com/web/jquery/

// https://developer.mozilla.org/ru/docs/Web/JavaScript

// https://metanit.com/web/javascript/

// https://www.schoolsw3.com/js

// 1
// Objects (есть кон-р: new Object([value]))
// у 'objects' есть много статич методов и ф-ций

// 1.1
// расширение одного обьекта другим обьектом - метод 'assign'

// const myObj1={
//     key1: "abc"
// }

// const myObj2={
//     key2: 123
// }

// // если бы ключи назывались одинаково - при расширении остался бы один
// // ключ, но с последним значением (перезапись)

// console.dir(myObj1);
// console.dir(myObj2);

// Object.assign(myObj1, myObj2);
// // расширили 'myObj1' вторым обьектом
// console.dir(myObj1);
// // 'myObj2' остался прежним
// console.dir(myObj2);

// здесь в 'myCopy' передаем 'myObj1'
// const myCopy=Object.assign({}, myObj1);
// // расширили 'myCopy' с помощью 'myObj1' и добавили еще ключ
// myCopy.key3="erfew";
// console.dir(myCopy);
// // 'myObj1' остался прежним
// console.dir(myObj1);

// 1.2
// console.dir(Object.keys(myCopy));
// console.dir(Object.values(myCopy));

// 1.3 
// 'seal'
// const Person={
//     fn: "Ella",
//     ln: "Chornogor",
//     mn: "Yurevna"
// }

// console.dir(Person);

// console.dir("Hello, "+ Object.values(Person)+ " !");

// // не хотим, чтобы к нашему об-ту добавлялись какие-то поля,
// // хотим, чтобы остались только те, которые есть
// // запрещаем изменения об-та с пом метода 'seal'
// Object.seal(Person);

// Person.year=100; // поле не добавится в об-т
// Person.fn="rgtrdfg"; // но изменения разрешены
// console.dir(Person);

// // 1.4
// // заморозка оьбект - теперь не только нельзя добавлять св-ва,
// // но и менять их нельзя
// Object.freeze(Person);
// Person.fn="aaaaaaaaaaaaa"; // не изменится
// console.dir(Person);

// // проверить, был ли обьект заморожен
// console.log(Object.isFrozen(Person));
// // проверить, был ли обьект запечатан
// console.log(Object.isSealed(Person));

// // 1.5
// // удаление по ключу
// delete Person.mn;
// // если мы удалили только здесь поле - то во всем предыдущих выводах
// // этого поля тоже не будет, потому что код ассинхронный (тот метод,
// // на который уходит меньше времени - отработает быстрее)
// // здесь 'delete' отработает быстрее, чем метод вывода на экран
// // в предыдущих выводах поле на самом деле еще сущ-ет, но в выводе
// // мы этого не увидим

// // 1.6
// // 'fromEntries' - соединяем кусочки 'map' в 'obj'
// // const entries=new Map([
// //     ['foo', 'bar'],
// //     ['baz', 42],
// // ]);

// // const obj = Object.fromEntries(entries); // получили 'obj'
// // console.log(obj);

// // 1.7 'Entries' - возвращает 'map' из 'object'
// const object1 = {
//     a: 'Something',
//     b: 42,
// };

// // преобразовали в массив - Object.entries(object1)
// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// }

//// в JS есть сборщик мусора-обьекты удалятся тогда, когда мы к ним перестанем обращаться

// 2
// String
// const str1="Hello";
// const str2=new String("tyhthr");

// console.dir(str1);
// console.dir(str2);

// console.dir(str1[3]);
// console.dir(str2[3]);

// // если вып-ть методы - то лучше работать со 'String'

// // 2.1
// // 'repeat' - вернет новую строку как копия строк
// console.dir(str1.repeat(3));

// // 2.2
// // 'lastIndexOf' - возвращают индекс последнего вхождения строки
// // 'indexOf' - возвращают индекс первого вхождения строки
// // принимают 2 пар-ра - саму строку и индекс
// console.dir(str1.lastIndexOf("l"));

// // 2.3
// // 'substr' - вырезать что-то из строки
// // принимает 2 пар-ра - индекс символа в строке, откуда начинаем
// // каким индексом заканчиваем
// console.dir(str1.substring(1,4));

// // 2.4
// // 'slice' - похож на 'substr'
// // тоже принимает 2 пар-ра - индекс символа в строке, откуда начинаем
// // каким индексом заканчиваем
// // в этом методе нач индекс всегда должен быть меньше, чем конечный

// // 2.5
// // 'toUpperCase' - показать большими буквами 
// // 'toLowerCase' - показать маленькими буквами 

// // 2.6
// // 'trimStart' - удаляет пробелы с начала строки
// // 'trimEnd' - удаляет пробелы с конца строки

// // 2.7
// // Конкатенация
// console.log(str1.concat(str2));

// // 2.8
// // 'replace' - замена для первого вхождения
// // 'replaceAll' - заменить все вхождения

// // 2.9
// // 'split' - разделяет строчку по какому либо разделителю
// const str_new=str1.split(" "); 
// // разделит по пробелу, можно по знаку преинания
// console.dir(str_new);

// 3
// Date - об-т класса
const today = new Date();
// получим полную дату в long формате
console.dir(today);

// можно получить по 'now'
const today2 = Date.now();
console.dir(today2);
// получим кол-во милисекунд, прошедших с 1 января 1970 года

let d1=new Date("2024-10-31");
let d2=new Date("31/10/2024"); // некорректный ввод
let d3=new Date("October 31, 2024 16:58");

console.log(d1);
console.log(d2);
console.log(d3);

let d4=new Date("2024-10-11");
// получаем разницу между датами в милисекундах
console.log(d1-d4);
console.log((d1-d4)/60); // в секундах
console.log((d1-d4)/60/60); // в минутах
console.log((d1-d4)/60/60/24); // в часах
console.log((d1-d4)/24/60/60/1000); // в днях

console.log(d1.getDate()); // возвращает день месяца
console.log(d1.getDay()); // возвращает день недели
// воскресенье - 0, понедельник - 1

let date_user= new Date("2000-11-01");
let days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(date_user.getDay());
console.log(days[date_user.getDay()]);

console.log(date_user);
console.log(date_user.toLocaleDateString());
console.log(date_user.toLocaleTimeString()); // только время

// let num1=parseInt(document.getElementById("id1").innerText) // достаем значение по 'id'
// из класса мы бы значение не достали
