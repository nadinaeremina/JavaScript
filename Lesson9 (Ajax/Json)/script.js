////////////////////////////////////JSON//////////////////////
// Java Script Object Notation - легковесный формат -массив данных (ключ: значение)

// Сериализация
// stringify(): из 'Object' в 'JSON'
// parse(): из 'JSON' в 'Object'

// const student={
//     name: 'Ivan',
//     group: 'PD_322',
//     age: 25
// }

///////////////////////////////////////////// 1 // Stringify() ////////////////////////////
///////////////////////////////////////////// 1.1 ///////////////////////////////////////
// console.dir(student);
// let jsonStudent=JSON.stringify(student);
// console.dir(jsonStudent);
// json-строка должна быть обязательно в двойных кавычках

// stringify(data, replacer, space) 
// 'data'-данные, кот мы хотим серелизовать
// 'replacer'-пар-р, который позволяет влиять на серелизацию обьекта 
// (мб функция, массив или 'null'-если этот пар-р не нужен)
// ф-ция может принимать 2 пар-ра (ключ и значение), которые будут использованы при серелизации
// 'space'-принимает строку или число и позволяет передать более читаемый вид строки 'json',
// добавляя отступы (передаваемое число - кол-во отступов)

///////////////////////////////////////////// 1.2 ////////////////////////////////////////
// function F1(key, value)
// {
//     // не серилизовать, если не подходит значение по условию
//     if(key=='age' && value<=16)
//     {
//         // не выведет возраст
//         return undefined;
//     }
//     return value;
// }

// console.dir(student);
// // jsonStudent=JSON.stringify(student, F1);
// jsonStudent=JSON.stringify(student, null, 2);
// // получится строка, которая раскладывается как ключ: значение
// console.dir(jsonStudent);

////////////////////////////////////////////// 1.3 //////////////////////////////////////
// let n1={
//     key1: 'Key1'
// }

// let n2={
//     key2: 'Key2'
// }

// // 'n1'-родитель 'n2'
// // 1 // можно так
// // n1.parent=n2;
// // 2 // то же самое
// n2.child=n1;

// // в серилизацию передаем тот об-т, который мы проинициализировали
// let jsonob=JSON.stringify(n2);
// console.dir(jsonob);

///////////////////////////////////////////// 2 // Parse() ////////////////////////////////
// Строка JSON
// let student_str=`{
//     "name": "Ivan",
//     "group": "PD_322",
//     "age": 25
// }`

// // строку формата 'JSON' парсим в обьект
// const student =JSON.parse(student_str);
// console.dir(student); // смотрим весь обьетк
// console.dir(student.group); // смотри поле обьекта

//////////////////////////////////////////// 3 // toJSON() /////////////////////////////
// этот метод можно применять к любому обьекту, это наше собственное представление об-та в 'JSON'
// если мы хотим заменить стандартное поведение на собственное - то создаем собственный метод 
// 'toJSON()' и в пар-ре 'stringify' мы будем вызывать метод, который мы пропишеи в 'toJSON'
// и использовать то возвращаемое значение вместо того, чтобы серилизовать олбьект так, как мы хотим
// часто применяется, если об-т содержит какието значения, которые будут нарушать серилизацию
// могут возникнуть проблемы, если об-т имеет вложенный об-т

// let stb={
//     serialnum: "AA111",
//     diplom: undefined,
//     // делаем проверку для поля, которое не определено
//     toJSON()
//     {
//         let jsonstr=
//         `{'serialnum': '${this.serialnum}','diplom': `
//             if (this.diplom==undefined)
//                 {
//                    jsonstr+='NON'
//                 }
//                 else
//                 {
//                    jsonstr+=`'${this.diplom}'}`
//                 }
//                 return jsonstr;
//     }
// }

// // просто так бы 'student' не серилизовался-тк 'stb' не серилизовано
// const student={
//     name: 'Ivan',
//     group: 'PD_322',
//     age: 10,
//     stb
// }

// const stJSON=JSON.stringify(student);
// console.dir(stJSON);

////////////////////////////////////////// 4 // AJAX ///////////////////////////////////
// синхронный запрос - ждем когда сервер проверит данные, потом сможем зайти
// ассинхронный запрос - не ждем отклика от сервера (более тяжелые)

// 'Ajax' - взаимодействие с сервером без перезагрузки страницы
// перезагружаться будет только та часть страницы, которая была изменена (экономит время)

// 'AJAX' применяется для:
// 1 // отправки данных из формы
// 2 // написания почтовой системы и чатов, чтобы принимать сообщения только на новые изменения
// (без перезагрузки полностью всей страницы)
// 3 // когда надо подгружать данные постепенно, а не все сразу

// Локальный сервер: https://127.0.0.1:5500
// '127.0.0.1'-зарезервированное доменное число
// '5500' - порт (для идентификации приложения, к которому идет обращение) - зарезервированное число
// 'localhost' - компьютер обращается сам к себе
// Путь к файлу: "5500\data\file.txt" - файл располагается локально

// Удаленный сервер
// тип протокола: (http/https)/domen/address (тип протокола, домен, адрес)
// https://www.google.com

// Для того, чтобы работать по технологии 'AJAX' без 'JQuery'

////////////////////////////////////// 4.1 // XMLHttpRequest //////////////////////////
// специальный встроенный об-т для исп-ия 'AJAX' ('ActiveXObject' - старый аналог)

let request;
// если 'XMLHttpRequest' существет-то в нашем об-те мы его создаем
if(window.XMLHttpRequest)
{
    request = new XMLHttpRequest();
}
else
{
    // если нет - то создаем 'ActiveXObject'
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

///////////////////////// Методы для того, чтобы послать наши запросы ////////////////////////////////////
////////////////////////////// Open() ///////////////////////////////////////////
// open(method, URL, [async, user, password]) - инициализация запроса, подготовка
// 'method'-сам метод http-запроса (get/post, put/delete) - для чего мы делаем запрос-чегго хотим
// 'URL' - адрес сервера, куда будет отправлен запрос
// далее: необязательные пар-ры:
// 'async' - true/'false, по умолчанию: true
// 'user', 'password' - для аутентификации

// readyState: 0/1/2/3/4 (пять состояний)
// 0-запрос неинициализирован (в 'open' ничего нет)
// 1-запрос инициализирован
// 2-запрос отправлен
// 3-запрос обрабатывается на сервере
// 4-запрос завершен и получен ответ от сервера

// 200-OK
// 300-redirect
// 400-error HTTP server
// 500-error client

// 'SPA'-пушим эл-ты, стрница дозагружается

////////////////////////////////// Источник /////////////////////////////////////////
// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

/////////////////////////////// Send() ///////////////////////////////////////////
// send()-отправка запроса


